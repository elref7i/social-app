import { PostsResponse } from '@/types/posts.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
//* ممكن اجيبو من locla storge => token
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async function (_, { getState }) {
    //!
    const state: RootState = getState();
    const token = state.userReducer.token;
    console.log(token);

    try {
      const options = {
        url: 'https://linked-posts.routemisr.com/posts?limit=50',
        method: 'GET',
        headers: { token },
      };
      const { data } = await axios.request(options);
      return data.posts;

      // return data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getSinglePost = createAsyncThunk(
  'posts/getSinglePost',
  async function (id: string, { getState }) {
    //!
    const state: RootState = getState();
    const token = state.userReducer.token;
    console.log(token);

    try {
      const options = {
        url: `https://linked-posts.routemisr.com/posts/${id}`,
        method: 'GET',
        headers: { token },
      };
      const { data } = await axios.request(options);

      return data.post;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState: PostsResponse = {
  posts: null,
  isLoading: true,
  isFetched: false,
  singlePost: null,
};
export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getPosts.fulfilled, function (state, { payload }) {
      console.log('true');
      state.posts = payload;
      state.isLoading = false;
      state.isFetched = true;
    });
    builder.addCase(getPosts.rejected, function () {});
    builder.addCase(getSinglePost.fulfilled, function (state, { payload }) {
      console.log('true');
      state.singlePost = payload;
      console.log(payload);

      state.isLoading = false;
      state.isFetched = true;
    });
    builder.addCase(getSinglePost.rejected, function () {
      console.log('error');
    });
  },
});

export const PostReducer = PostSlice.reducer;
