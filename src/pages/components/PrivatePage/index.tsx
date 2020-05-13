import React, { useState, useMemo, useCallback } from 'react';
import { MdBrightness4, MdAccountCircle } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { IconButton, OutlinedButton } from 'components/Button';
import {
  Toolbar,
  ToolbarContent,
  ToolbarTitle,
  ToolbarActions,
} from 'components/Toolbar';

import Auth from 'model/Auth';

import useDarkMode from 'hooks/useDarkMode';
import useTooltip from 'hooks/useTooltip';

import {
  Page,
  User,
  UserMenu,
  UserData,
  UserName,
  UserActions,
  ClickOut,
} from './style';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ({ title, children }: Props) {
  const { tooltip } = useTooltip();
  const { toggleDarkMode, inDarkMode } = useDarkMode();
  const history = useHistory();
  const [userMenuIsOpen, toggleUserMenu] = useState<boolean>(false);

  const userName = useMemo(() => {
    const data = Auth.userData();
    if (data) return data.name;
  }, []);

  const signOut = useCallback(() => {
    Auth.logout(() => history.push('/login', { from: history.location }));
  }, [history]);

  return (
    <Page>
      <Toolbar isFixed>
        <ToolbarContent>
          <ToolbarTitle>{title}</ToolbarTitle>
        </ToolbarContent>
        <ToolbarActions>
          <User>
            <IconButton
              onClick={() => toggleUserMenu(true)}
              isActive={userMenuIsOpen}
            >
              <MdAccountCircle />
            </IconButton>
            {userMenuIsOpen && (
              <ClickOut
                onClick={() => toggleUserMenu(false)}
                isOpen={userMenuIsOpen}
              />
            )}
            <UserMenu isOpen={userMenuIsOpen}>
              <UserData>
                <UserName>{userName}</UserName>
              </UserData>
              <UserActions>
                <OutlinedButton onClick={signOut} style={{ width: '100%' }}>
                  Sign Out
                </OutlinedButton>
              </UserActions>
            </UserMenu>
          </User>
          <IconButton
            onClick={toggleDarkMode}
            isActive={inDarkMode}
            ref={tooltip('Dark mode')}
          >
            <MdBrightness4 />
          </IconButton>
        </ToolbarActions>
      </Toolbar>
      {children}
    </Page>
  );
}
