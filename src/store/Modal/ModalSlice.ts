import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  userId: number;
}

const initialState: ModalState = {
  isOpen: false,
  userId: NaN,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<number>) {
      state.isOpen = true;
      state.userId = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.userId = NaN;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
