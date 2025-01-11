'use client';
import { login } from '@/store/features/user.slice';
import { formikLogin } from '@/types/formik.types';
import { Box, Button, Container, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

export default function page() {
  const dispatch = useDispatch();
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('* Email is required.')
      .matches(emailRegx, '* Invalid email address.'),
    password: Yup.string()
      .required('* Password is required.')
      .matches(passwordRegx, '* Invalid password.'),
  });
  const initialValues: formikLogin = {
    email: '',
    password: '',
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return (
    <>
      <Box
        component="section"
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container sx={{ bg: 'red' }}>
          <Paper
            elevation={6}
            sx={{
              py: '30px',
              px: '20px',
              width: { sm: '100%', md: '75%', lg: '50%' },
              mx: 'auto',
            }}
          >
            {/* //* 0-24 */}
            <form
              onSubmit={handleSubmit}
              style={{
                width: '100%',
                marginInline: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  rounded: '10px',
                  ':focus': { borderColor: 'red' },
                }}
              ></TextField>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                fullWidth
                autoComplete="current-password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  rounded: '10px',
                  ':focus': { borderColor: 'red' },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: '20px',
                  py: '10px',
                  font: 'bold',
                  fontSize: '15px',
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
