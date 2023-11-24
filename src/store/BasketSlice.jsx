import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
	name: "items",
	initialState: [],
	reducers: {
		addToBasket(state, action) {
			state.push(action.payload);
		},
		removeFromBasket(state, action) {
			let index = state.findIndex((item) => (
				item.id === action.payload
			))
			if(index >= 0)state.splice(index, 1)
		},
	},
});

export const getBasketTotal = (basket) => {
	return basket.reduce((amount, item) => amount + item.price, 0);
};

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;
