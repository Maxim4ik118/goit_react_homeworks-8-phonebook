import { useDispatch, useSelector } from 'react-redux';

import { Alert, Box, Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';

import { useForm } from 'hooks/useForm';
import { userSignUpRequest } from 'redux/user/userActions';

import { StyledSignUp } from './Styled';

function SignUp() {
  const dispatch = useDispatch();
  const { formData, handleInputChange, reset } = useForm();
  const { error, isFetching } = useSelector(state => state.user);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(userSignUpRequest(formData));
    reset();
  };

  return (
    <StyledSignUp>
      <Box
        component="form"
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: '100%',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 className="title">Sign Up</h1>
        <Stack sx={{ width: '100%', alignItems: 'center' }} spacing={2}>
          {error?.message && (
            <Alert
              sx={{ width: '100%', maxWidth: '450px', boxSizing: 'border-box' }}
              severity="error"
            >
              {error.message}
            </Alert>
          )}
          <TextField
            className="form-input"
            id="outlined-required"
            label="Name"
            value={formData?.name ?? ''}
            name="name"
            onChange={handleInputChange}
            required
          />
          <TextField
            className="form-input"
            id="outlined-required"
            label="Email"
            value={formData?.email ?? ''}
            name="email"
            onChange={handleInputChange}
            required
          />
          <TextField
            className="form-input"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData?.password ?? ''}
            name="password"
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
        </Stack>
      </Box>
    </StyledSignUp>
  );
}

export default SignUp;
