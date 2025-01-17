import { formikSignup } from '@/types/formik.types';
import { userState } from '@/types/user.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const login = createAsyncThunk(
  '/user/login',
  async (values: { email: string; password: string }) => {
    try {
      const options = {
        url: 'https://linked-posts.routemisr.com/users/signin',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const signup = createAsyncThunk(
  '/user/signup',
  async (values: formikSignup) => {
    try {
      const options = {
        url: 'https://linked-posts.routemisr.com/users/signup',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState: userState = {
  token: localStorage.getItem('token'),
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(login.fulfilled, function (state, action) {
      toast.success('success');
      state.token = action.payload.token;
      state.isLoading = false;
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(login.rejected, function () {
      toast.error('error');
    });
    builder.addCase(signup.fulfilled, function () {
      toast.success('success');
      // console.log('true');
    });
    builder.addCase(signup.rejected, function () {
      toast.error('error');
      // console.log('false');
    });
    // builder.addCase(login.pending, function (state, action) {});
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
