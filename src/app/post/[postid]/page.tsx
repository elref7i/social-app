'use client';
import { useAppDispatch, useAppSelector } from '../../../hooks/store.hook';
import { getSinglePost } from '../../../store/features/post.slice';
import { Box } from '@mui/material';
import { use, useEffect } from 'react';
import PostCard from '../../_components/Post/Post';

export default function Page({
  params,
}: {
  params: Promise<{ postid: string }>;
}) {
  const { postid } = use(params);
  const dispatch = useAppDispatch();
  const { singlePost } = useAppSelector((store) => {
    return store.PostReducer;
  });
  console.log(postid);

  useEffect(() => {
    dispatch(getSinglePost(postid));
  }, [dispatch, postid]);
  return (
    <>
      <Box
        component={'section'}
        sx={{ mx: 'auto', width: '50%', minWidth: '300px' }}
      >
        {singlePost ? (
          <PostCard dataInfo={singlePost} showAllComments={true} />
        ) : (
          ''
        )}
      </Box>
    </>
  );
}
