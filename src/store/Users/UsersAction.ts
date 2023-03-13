import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsersData = createAsyncThunk('users/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
});
