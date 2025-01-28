import { Box, IconButton, Paper, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Comment } from '@/types/posts.types';
import userPlaceHolder from '../../../assets/imgs/user.png';
import Image from 'next/image';
import { Comment } from '../../../../src/types/posts.types';

export default function CommentPost({ comments }: { comments: Comment }) {
  function handleImagePath(path: string) {
    if (path.includes('undefined')) return userPlaceHolder;
    else return path;
  }
  const { name, photo } = comments.commentCreator;
  const { content, createdAt } = comments;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          mb: '5px',
          p: '5px',
        }}
      >
        <Image
          style={{ alignSelf: 'start' }}
          src={handleImagePath(photo)}
          width={40}
          height={40}
          alt="user INfo"
        />
        <Box
          component={'div'}
          sx={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'start',
          }}
        >
          <Paper
            sx={{ bgcolor: '#0004', px: '15px', py: '8px', display: 'flex' }}
          >
            <Box component={'section'} sx={{ flex: '1' }}>
              <Typography
                component={'h2'}
                sx={{ fontSize: '15px', fontWeight: 'bold' }}
              >
                {name}
              </Typography>
              <Typography component={'p'}>{content}</Typography>
            </Box>
            <IconButton aria-label="settings" sx={{ alignSelf: 'start' }}>
              <MoreVertIcon />
            </IconButton>
          </Paper>
          <Typography component={'h6'} sx={{ px: '15px' }}>
            {new Date(createdAt).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
