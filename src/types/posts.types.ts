export interface PaginationInfo {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
  total: number;
}

export interface User {
  _id: string;
  name: string;
  photo: string;
}

export interface CommentCreator {
  _id: string;
  name: string;
  photo: string;
}

export interface Comment {
  _id: string;
  content: string;
  commentCreator: CommentCreator;
  post: string; // The post ID the comment is related to
  createdAt: string; // ISO date string
}

export interface Post {
  _id: string;
  body: string;
  image: string;
  user: User;
  createdAt: string; // ISO date string
  comments: Comment[];
}

export interface PostsResponse {
  posts: null | Post[];
  isLoading: boolean;
  isFetched: boolean;
}
