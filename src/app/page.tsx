import PostCard from '@/components/Post/Post';
import { Container, Grid2 } from '@mui/material';

export default function Home() {
  //* Grid Contianer
  return (
    <>
      <Container>
        <Grid2 container>
          <Grid2 size={3}></Grid2>
          <Grid2 size={6}>
            <PostCard />
          </Grid2>
          <Grid2 size={3}></Grid2>
        </Grid2>
      </Container>
    </>
  );
}
