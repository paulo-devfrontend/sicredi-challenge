import React, { useState, useEffect } from 'react';
import { MdDeleteForever, MdEdit, MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { TextButton, IconButton } from 'components/Button';
import {
  Loader,
  LoaderCircular,
  InderteminateCircle,
} from 'components/Loading';

import { DragonList } from 'api';

import Dragons from 'model/Dragons';

import useTooltip from 'hooks/useTooltip';

import { FAB } from 'pages/components/FAB';
import Page from 'pages/components/PrivatePage';

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
                  <IconButton ref={tooltip('Edit')}>
                    <MdEdit />
                  </IconButton>
                  <IconButton ref={tooltip('Remove')}>
                    <MdDeleteForever />
                  </IconButton>
                </CardActionsIcon>
              </CardActions>
            </Card>
          ))}
      </List>
      <FAB onClick={() => history.push('/create')}>
        <MdAdd />
      </FAB>
    </Page>
  );
}
