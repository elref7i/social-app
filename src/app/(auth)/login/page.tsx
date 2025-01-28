'use client';
import { useAppDispatch } from '../../../hooks/store.hook';
import { login } from '../../../store/features/user.slice';
import { formikLogin } from '../../../types/formik.types';
import { Box, Container, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

export default function Page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const router = useRouter();

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
  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    //* تعرف انى ممكن بدخلنى فى fullfilled
    onSubmit: (values) => {
      dispatch(login(values))
        .then((res) => {
          if (res.payload.message === 'success') {
            setTimeout(() => {
              router.push('/');
            }, 2000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
              <button
                type="submit"
                style={{
                  paddingBlock: '10px',
                  paddingInline: '20px',
                  borderRadius: '10px',
                  backgroundColor: '#1976D2',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              >
                Submit
              </button>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
