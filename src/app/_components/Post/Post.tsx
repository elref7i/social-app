'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Image from 'next/image';
import CommentPost from '../CommentPost/CommentPost';
import { Box, Button, Divider, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
import { Post } from '../../../../src/types/posts.types';

export default function PostCard({
  dataInfo,
  showAllComments = false,
}: {
  dataInfo: Post;
  showAllComments?: boolean;
}) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const { image, body, createdAt, _id } = dataInfo;
  const { photo, name } = dataInfo.user;
  // const { content, post } = dataInfo.comments;

  return (
    <Card sx={{ width: '100%', p: '10px', mb: '20px' }}>
      <CardHeader
        avatar={<Image src={photo} width={50} height={40} alt="user INfo" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={new Date(createdAt).toLocaleDateString()}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {body}
        </Typography>
      </CardContent>
      {image && (
        <CardMedia
          height={250}
          component="img"
          image={image}
          alt="Paella dish"
        />
      )}
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: '20px',
        }}
      >
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Box component="div" sx={{ py: '15px' }}>
        <Divider sx={{ mb: '10px' }}>Comments</Divider>
        {dataInfo.comments.length > 0 && !showAllComments && (
          <CommentPost comments={dataInfo.comments[0]} />
        )}
        {dataInfo.comments.length > 1 &&
          showAllComments &&
          dataInfo.comments.map((comment) => (
            <CommentPost comments={comment} key={comment._id} />
          ))}
        <Button
          sx={{
            color: '#000a',
            mb: '5px',
            ':hover': {
              bgcolor: 'transparent',
              color: '#000',
              transition: 'color .8s',
            },
          }}
        >
          {dataInfo.comments.length > 1 && !showAllComments && (
            <Link href={`/post/${_id}`}>Show More Commente</Link>
          )}
        </Button>
        <Box component={'div'} sx={{ display: 'flex' }}>
          <TextField
            type="text"
            placeholder="Enter The Comment"
            minRows={1}
            sx={{ flex: '1' }}
          />
          <IconButton aria-label="add to favorites">
            <SendIcon
              sx={{
                width: '35px',
                height: '35px',
                p: '4px',
                bgcolor: '#0001',
                borderRadius: '50%',
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
