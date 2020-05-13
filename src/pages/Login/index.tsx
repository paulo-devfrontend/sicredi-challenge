import React from 'react';
import { MdBrightness4 } from 'react-icons/md';

import { IconButton } from 'components/Button';
import {
  ToolbarContent,
  ToolbarTitle,
  ToolbarActions,
} from 'components/Toolbar';

import useDarkMode from 'hooks/useDarkMode';
import useTooltip from 'hooks/useTooltip';

import Form from './Form';
import { Page, Card, Header, Headline, Title, Tagline, TopBar } from './style';

export default function () {
  const { tooltip } = useTooltip();
  const { inDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Page>
      <Card>
        <TopBar>
          <ToolbarContent>
            <ToolbarTitle>Dragon App</ToolbarTitle>
          </ToolbarContent>
          <ToolbarActions>
            <IconButton
              onClick={toggleDarkMode}
              isActive={inDarkMode}
              ref={tooltip('Dark mode')}
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
