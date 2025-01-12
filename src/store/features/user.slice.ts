import { userState } from '@/types/user.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  '/user/login',
  async function (values: { email: string; password: string }) {
    const options = {
      url: 'https://linked-posts.routemisr.com/users/signup',
      method: 'POST',
      data: values,
    };
    const { data } = await axios.request(options);
    return data;
  }
);
const initialState: userState = {
  token: null,
  isLoading: true,
  isFetched: false,
  isPending: true,
  isError: false,
  error: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(login.fulfilled, function () {});
    builder.addCase(login.rejected, function () {});
    builder.addCase(login.pending, function () {});
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
