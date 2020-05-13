import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Dragon } from 'api';

import Dragons from 'model/Dragons';

import Page from 'pages/components/PrivatePage';

import {
  Card,
  Header,
  Title,
  CreationDate,
  MediaContainer,
  Media,
  Info,
  Term,
  Description,
} from './style';

export default function () {
  const { id } = useParams();
  const [dragon, setDragon] = useState<Dragon>();
  const pageTitle = useMemo(() => {
    if (dragon) {
      return dragon.name;
    }
    return 'Detail';
  }, [dragon]);

  useEffect(() => {
    id && setDragon(Dragons.byId(id));
  }, [id]);

  if (!dragon) {
    return null;
  }

  return (
    <Page title={pageTitle} backButton>
      <Card>
        <Header>
          <Title>{dragon.name}</Title>
          <CreationDate>
            Created at {new Date(dragon.createdAt).toLocaleString()}
          </CreationDate>
        </Header>
        {dragon.imageUrl && (
          <MediaContainer imageURL={dragon.imageUrl}>
            <Media src={dragon.imageUrl} alt={dragon.name} />
          </MediaContainer>
        )}
        <Info>
          <Term>Type</Term>
          <Description style={{ textTransform: 'capitalize' }}>
            {dragon.type}
          </Description>
          <Term>History</Term>
          <Description>
            {Array.isArray(dragon.histories) &&
              dragon.histories.map((entry, i) => <p key={i}>{entry}</p>)}
          </Description>
        </Info>
      </Card>
    </Page>
  );
}
