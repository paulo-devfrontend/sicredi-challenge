import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { MdBrightness4, MdAccountCircle, MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { IconButton, OutlinedButton } from 'components/Button';
import {
  Toolbar,
  ToolbarContent,
  ToolbarTitle,
  ToolbarActions,
  NavButton,
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
  BackDrop,
} from './style';

interface Props {
  title: string;
  children: React.ReactNode;
  backButton?: boolean;
}

export default function ({ title, children, backButton }: Props) {
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

  useEffect(() => {
    return () =>
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
  }, []);

  return (
    <Page>
      <Toolbar isFixed>
        {backButton && (
          <NavButton onClick={history.goBack}>
            <MdArrowBack />
          </NavButton>
        )}
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
              <BackDrop
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
