import { Box, Button, Container, Paper, TextField } from '@mui/material';

export default function page() {
  return (
    <>
      <h1>Login</h1>
      <Box component="section" sx={{}}>
        <Container sx={{ bg: 'red' }}>
          <Paper
            elevation={6}
            sx={{
              py: '30px',
              px: '20px',
              width: '50%',
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
              <Button variant="contained">Submit</Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
