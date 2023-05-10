import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newBasket = [...state.items];
      if (index > 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove(id: ${action.payload.id}) as its not in the basket`
        );
      }
      state.items = newBasket;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, incrementByAmount } =
  basketSlice.actions;

export const selectedBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;