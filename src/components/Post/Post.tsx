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
import { Post } from '@/types/posts.types';
import Image from 'next/image';
import CommentPost from '../CommentPost/CommentPost';
import { Box, Divider } from '@mui/material';

export default function PostCard({ dataInfo }: { dataInfo: Post }) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  console.log(dataInfo);

  const { image, body, createdAt } = dataInfo;
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
      {dataInfo.comments && (
        <Box component="div" sx={{ py: '15px' }}>
          <Divider sx={{ mb: '10px' }}>Comments</Divider>
          <CommentPost comments={dataInfo.comments[0]} />
        </Box>
      )}
    </Card>
  );
}
