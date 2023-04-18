import { createSlice } from "@reduxjs/toolkit";

interface CartProduct {
	title: string;
	image: string;
	quantity: number;
	price: number;
}
export interface CartState {
	cart: { [id: number]: CartProduct };
	totalPrice: number;
	totalItems: number;
}

const initialState: CartState = {
	cart: {},
	totalPrice: 0,
	totalItems: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		incrementItem: (
			state: CartState,
			action: {
				payload: {
					id: number;
					title: string;
					image: string;
					price: number;
				};
			}
		) => {
			const { id, title, image, price } = action.payload;
			if (Object.hasOwn(state.cart, id)) {
				state.cart[id].quantity += 1;
			} else {
				state.cart[id] = { title, image, quantity: 1, price };
			}
			state.totalPrice += +price.toFixed(2);
			state.totalItems += 1;
		},
		decrementItem: (
			state: CartState,
			action: {
				payload: number;
			}
		) => {
			const id = action.payload;
			const { price } = state.cart[id];
			if (state.cart[id].quantity === 1) {
				delete state.cart[id];
			} else {
				state.cart[id].quantity -= 1;
			}
			state.totalPrice -= +price.toFixed(2);
			state.totalItems -= 1;
		},
		deleteItem: (
			state: CartState,
			action: {
				payload: number;
			}
		) => {
			const id = action.payload;
			const { price, quantity } = state.cart[id];
			state.totalPrice -= +price.toFixed(2) * quantity;
			state.totalItems -= quantity;
			delete state.cart[id];
		},
	},
});

export const { incrementItem, decrementItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
