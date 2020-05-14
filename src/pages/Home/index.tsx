import React, { useState, useEffect, useCallback } from 'react';
import { MdDeleteForever, MdEdit, MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { TextButton, IconButton } from 'components/Button';
import {
  Loader,
  LoaderCircular,
  InderteminateCircle,
} from 'components/Loading';

import { DragonList, Dragon } from 'api';

import Dragons from 'model/Dragons';

import useTooltip from 'hooks/useTooltip';

import FAB from 'pages/components/FAB';
import Page from 'pages/components/PrivatePage';

import DeleteModal from './DeleteModal';
import HomeContext from './HomeContext';
import {
  List,
  Title,
  Card,
  CardMedia,
  CardHeadline,
  CardTitle,
  CardSubhead,
  CardActions,
  CardActionsIcon,
} from './style';

export default function () {
  const history = useHistory();
  const { tooltip } = useTooltip();
  const [list, setList] = useState<DragonList>(Dragons.list());
  const [isLoading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dragonToDelete, setDragonToDelete] = useState<Dragon | null>(null);

  const deleteDragon = useCallback((dragon: Dragon) => {
    setDragonToDelete(dragon);
    setOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(false);
    setDragonToDelete(null);
  }, []);

  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const success = await Dragons.update();
      success && setList(Dragons.list());
      setLoading(false);
    };

    getList();
  }, []);

  if (isLoading) {
    return (
      <Page title="Dragon App">
        <List>
          <Title>Dragons</Title>
          <Loader style={{ gridColumn: 'auto / span 12' }}>
            <LoaderCircular>
              <InderteminateCircle />
            </LoaderCircular>
          </Loader>
        </List>
      </Page>
    );
  }

  return (
    <HomeContext.Provider value={{ dragonToDelete, deleteDragon, closeModal }}>
      <Page title="Dragon App">
        <List>
          <Title>Dragons</Title>
          {list &&
            list.map(dragon => (
              <Card key={dragon.id}>
                {dragon.imageUrl && <CardMedia imageURL={dragon.imageUrl} />}
                <CardHeadline>
                  <CardTitle>{dragon.name}</CardTitle>
                  <CardSubhead>{dragon.type}</CardSubhead>
                </CardHeadline>
                <CardActions>
                  <TextButton
                    onClick={() => history.push(`/detail/${dragon.id}`)}
                  >
                    Detail
                  </TextButton>
                  <CardActionsIcon>
                    <IconButton
                      ref={tooltip('Edit')}
                      onClick={() => history.push(`/edit/${dragon.id}`)}
                    >
                      <MdEdit />
                    </IconButton>
                    <IconButton
                      ref={tooltip('Remove')}
                      onClick={() => deleteDragon(dragon)}
                    >
                      <MdDeleteForever />
                    </IconButton>
                  </CardActionsIcon>
                </CardActions>
              </Card>
            ))}
        </List>
        <DeleteModal
          isOpen={openModal}
          onConfirm={() => setList(Dragons.list())}
        />
        <FAB onClick={() => history.push('/create')}>
          <MdAdd />
        </FAB>
      </Page>
    </HomeContext.Provider>
  );
}
