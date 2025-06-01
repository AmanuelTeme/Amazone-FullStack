// This file contains the reducer function and the initial state for the DataContext

// import action types
import { Type } from "./action.type";

// initial state for the reducer and exporting it
export const initialState = {
  basket: [],
  user: null,
};

// reducer function for the DataContext
export const reducer = (state, action) => {
  switch (action.type) {
    // add to basket
    case Type.ADD_TO_BASKET:
      // check if the item already exists in the basket
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });

        return { ...state, basket: updatedBasket };
      }

    // remove from basket
    case Type.REMOVE_FROM_BASKET:
      // check if the item already exists in the basket and get the index of the item
      const index = state.basket.findIndex((item) => item.id === action.id);

      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    // default case
    default:
      return state;
  }
};
