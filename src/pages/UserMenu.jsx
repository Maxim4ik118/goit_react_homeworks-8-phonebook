import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Button, Stack, Alert } from '@mui/material';

import {
  getUserDetailsRequest,
  userLogOutRequest,
} from 'redux/user/userActions';

import WithAuthRedirect from 'hoc/withAuthRedirect';

import { StyledUserMenu } from './Styled';

function UserMenu() {
  const { userData, error, isFetching } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!userData) return;

    dispatch(getUserDetailsRequest());
  }, []);

  const handleLogOut = () => {
    dispatch(userLogOutRequest());
  };

  return (
    <StyledUserMenu>
      <Box component="form">
        <h1 className="title">User Menu</h1>

        <Stack sx={{ width: '100%', justifyContent: 'center' }} spacing={2}>
          {error?.message && (
            <Alert
              sx={{ width: '100%', maxWidth: '450px', boxSizing: 'border-box' }}
              severity="error"
            >
              {error.message}
            </Alert>
          )}
          {!isFetching ? (
            <>
              <p className="user-info">
                User Name: <b>{userData?.name ?? '-'}</b>
              </p>
              <p className="user-info">
                User Email: <b>{userData?.email ?? '-'}</b>
              </p>
            </>
          ) : (
            'Loading...'
          )}
          <Button
            variant="contained"
            type="button"
            disabled={isFetching}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </Stack>
      </Box>
    </StyledUserMenu>
  );
}

export default WithAuthRedirect(UserMenu);
