import { fetchUsersData } from './UsersAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../types';

interface UserState {
  data: UserData[];
  filter: string;
  deletedUsers: UserData[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  filter: '',
  deletedUsers: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser(state, action: PayloadAction<number>) {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setDeletedUsers(state, action: PayloadAction<number>) {
      const user = state.data.find((user) => user.id === action.payload);
      if (user) {
        state.deletedUsers.push(user);
      }
    },
    reset(state) {
      state.filter = '';
      state.data = state.data.concat(state.deletedUsers).sort((a, b) => a.id - b.id);
      state.deletedUsers = [];
    },
  },
  extraReducers: {
    [fetchUsersData.fulfilled.type]: (state, action: PayloadAction<UserData[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchUsersData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUsersData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { removeUser, setFilter, setDeletedUsers, reset } = usersSlice.actions;
export default usersSlice.reducer;
