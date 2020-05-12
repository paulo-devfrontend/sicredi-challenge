import React, { useCallback, useContext } from 'react';
import { MdBrightness4 } from 'react-icons/md';

import { IconButton } from 'components/Button';
import {
  ToolbarContent,
  ToolbarTitle,
  ToolbarActions,
} from 'components/Toolbar';

import useTooltip from 'hooks/useTooltip';

import Form from './Form';
import { Page, Card, Header, Headline, Title, Tagline, TopBar } from './style';

import AppContext from 'AppContext';

export default function () {
  const { switchTheme, theme } = useContext(AppContext);

  const nightLight = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    switchTheme(newTheme);
  }, [theme, switchTheme]);

  return (
    <Page>
      <Card>
        <TopBar>
          <ToolbarContent>
            <ToolbarTitle>Dragon App</ToolbarTitle>
          </ToolbarContent>
          <ToolbarActions>
            <IconButton
              onClick={nightLight}
              isActive={theme === 'dark'}
              ref={useTooltip('Night light')}
            >
              <MdBrightness4 />
            </IconButton>
          </ToolbarActions>
        </TopBar>
        <Header>
          <Headline>
            <Title>Login</Title>
            <Tagline>Sign in to access the app.</Tagline>
          </Headline>
        </Header>
        <Form />
      </Card>
    </Page>
  );
}
