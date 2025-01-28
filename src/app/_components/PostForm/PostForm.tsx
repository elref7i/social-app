'use client';
import { Box, Button, styled, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef } from 'react';
import { useAppSelector } from '../../../hooks/store.hook';
import axios from 'axios';

export default function PostForm() {
  const { token } = useAppSelector((store) => {
    return store.userReducer;
  });
  const postContentRef = useRef<HTMLInputElement>(null);
  const postFileRef = useRef<HTMLInputElement>(null);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  async function createPost() {
    const content = postContentRef.current?.value || '';
    const file = postFileRef.current?.files?.[0];

    const postData = new FormData();
    postData.append('body', content);
    if (file) {
      postData.append('file', file);
    }

    try {
      const options = {
        url: 'https://linked-posts.routemisr.com/posts',
        method: 'POST',
        headers: {
          token,
        },
        data: postData,
      };

      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <TextField
          type="text"
          placeholder="Enter The Content Post"
          fullWidth
          sx={{ mb: 1 }}
          inputRef={postContentRef}
        />
        <Box
          component={'div'}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput type="file" ref={postFileRef} />
          </Button>
          <Button
            onClick={createPost}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}
