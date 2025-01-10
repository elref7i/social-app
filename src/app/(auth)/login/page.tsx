'use client';
import { Box, Button, Container, Paper, TextField } from '@mui/material';

export default function page() {
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
              action=""
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
                sx={{
                  rounded: '10px',
                  ':focus': { borderColor: 'red' },
                }}
              />
              <Button
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
