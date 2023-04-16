import { createSlice } from "@reduxjs/toolkit";

interface CartProduct {
	title: string;
	image: string;
	quantity: number;
}
interface CartState {
	cart: { [id: number]: CartProduct };
}

const initialState: CartState = {
	cart: {},
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
					quantity: number;
				};
			}
		) => {
			const { id, title, image, quantity } = action.payload;
			if (Object.hasOwn(state.cart, id)) {
				state.cart[id].quantity += 1;
			} else {
				state.cart[id] = { title, image, quantity };
			}
		},
		decrementItem: (
			state: CartState,
			action: {
				payload: number;
			}
		) => {
			const id = action.payload;
			if (state.cart[id].quantity === 1) {
				delete state.cart[id];
			} else {
				state.cart[id].quantity -= 1;
			}
		},
		deleteItem: (
			state: CartState,
			action: {
				payload: number;
			}
		) => {
			const id = action.payload;
			delete state.cart[id];
		},
	},
});

export default cartSlice.reducer;
