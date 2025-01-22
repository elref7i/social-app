'use client';
import PostCard from '@/components/Post/Post';
import PostForm from '@/components/PostForm/PostForm';
import { useAppDispatch, useAppSelector } from '@/hooks/store.hook';
import { getPosts } from '@/store/features/post.slice';
import { Container, Grid2 } from '@mui/material';
import { useEffect } from 'react';

export default function Home() {
  const { posts } = useAppSelector((store) => {
    return store.PostReducer;
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  //* Grid Contianer
  return (
    <>
      <Container>
        <Grid2 container>
          <Grid2 size={3}></Grid2>
          <Grid2 size={6} columnSpacing={20}>
            <PostForm />
            {posts
              ? posts?.map((post) => (
                  <PostCard dataInfo={post} key={post._id} />
                ))
              : ''}
          </Grid2>
          <Grid2 size={3}></Grid2>
        </Grid2>
      </Container>
    </>
  );
}
