import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Box, Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';

import { CONTACTS_ROUTE, REGISTER_ROUTE } from 'constants/routes';
import { userSignInRequest } from 'redux/user/userActions';
import { useForm } from 'hooks/useForm';

import { StyledSignIn } from './Styled';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
}

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, handleInputChange, reset } = useForm(INITIAL_FORM_STATE);
  const { userData, error, isFetching } = useSelector(state => state.user);

  useEffect(() => {
    if (!userData) return;

    navigate(CONTACTS_ROUTE);
  }, [userData, navigate]);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(userSignInRequest(formData));
    reset();
  };

  return (
    <StyledSignIn>
      <Box
        component="form"
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: '100%',
        }}
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="title">Sign In</h1>
        <Stack sx={{ width: '100%', alignItems: 'center' }} spacing={2}>
          {!!error && (
            <Alert
              sx={{ width: '100%', maxWidth: '450px', boxSizing: 'border-box' }}
              severity="error"
            >
              {error}
            </Alert>
          )}
          <TextField
            className="form-input"
            id="outlined-required"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            className="form-input"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <LoadingButton
            loading={isFetching}
            loadingPosition="start"
            startIcon={<LoginIcon />}
            variant="contained"
            disabled={isFetching}
            type="submit"
          >
            Sign In
          </LoadingButton>
          <p>Don't have an account yet? <Link to={REGISTER_ROUTE}>Sign Up!</Link></p>
        </Stack>
      </Box>
    </StyledSignIn>
  );
}

export default SignIn;
