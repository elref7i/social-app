'use client';
import { useAppDispatch } from '../../../hooks/store.hook';
import { signup } from '../../../store/features/user.slice';
import { formikSignup } from '../../../types/formik.types';
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const validationSchema = Yup.object({
    name: Yup.string().required('name is Required').min(3).max(20),
    email: Yup.string()
      .required('* Email is required.')
      .matches(emailRegx, '* Invalid email address.'),
    password: Yup.string()
      .required('* Password is required.')
      .matches(passwordRegx, '* Invalid password.'),
    rePassword: Yup.string()
      .required('* Please confirm your password.')
      .oneOf([Yup.ref('password')], '* Passwords must match.'),
    dateOfBirth: Yup.string().required('name is Required'),
    gender: Yup.string().required('* Email is required.'),
  });

  const initialValues: formikSignup = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    dateOfBirth: '',
    gender: '',
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        dispatch(signup(values))
          .then((res) => {
            if (res.payload.message === 'success') {
              setTimeout(() => {
                router.push('login');
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
                label="Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  rounded: '10px',
                  ':focus': { borderColor: 'red' },
                }}
              />
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
              />
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
              <TextField
                id="outlined-confirmPassword-input"
                label="Confirm Password"
                type="password"
                fullWidth
                autoComplete="current-password"
                name="rePassword"
                value={values.rePassword}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  rounded: '10px',
                  ':focus': { borderColor: 'red' },
                }}
              />
              <TextField
                id="outlined-dateOfBirth-input"
                type="date"
                fullWidth
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  rounded: '10px',
                  ':focus': { borderColor: 'red' },
                }}
              />
              <FormControl sx={{ alignSelf: 'flex-start' }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  // defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </RadioGroup>
              </FormControl>
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
