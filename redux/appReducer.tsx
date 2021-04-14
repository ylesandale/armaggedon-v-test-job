import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  dangerousOnly: false,
  distance: {
    kilometers: true,
    lunar: false,
  },
  pagination: 3,
  cart: [],
  modalCart: false,
};

export const armaggedonSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDangerous(state) {
      state.dangerousOnly = !state.dangerousOnly;
    },
    setKilometersDistance(state) {
      state.distance.lunar = false;
      state.distance.kilometers = true;
    },
    setLunarDistance(state) {
      state.distance.kilometers = false;
      state.distance.lunar = true;
    },
    setStartPagination(state) {
      state.pagination = 3;
    },
    setPagination(state, action: PayloadAction<number>) {
      if (action.payload > state.pagination + 3) {
        state.pagination += 3;
      } else {
        state.pagination = action.payload;
      }
    },
    addCart(state, action: PayloadAction<any>) {
      state.cart.push(action.payload);
    },
    removeCart(state, action: PayloadAction<any>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = initialState.cart;
    },
    setVisibleModal(state) {
      state.modalCart = true;
    },
    setUnvisibleModal(state) {
      state.modalCart = false;
    },
  },
});

export const {
  setDangerous,
  setKilometersDistance,
  setLunarDistance,
  setStartPagination,
  setPagination,
  removeCart,
  addCart,
  clearCart,
  setVisibleModal,
  setUnvisibleModal,
} = armaggedonSlice.actions;
export default armaggedonSlice.reducer;
