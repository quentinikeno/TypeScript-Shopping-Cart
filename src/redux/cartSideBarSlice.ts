import { createSlice } from "@reduxjs/toolkit";
import { State } from "react-burger-menu";

interface cartSidbarState {
	isOpen: boolean;
}

const initialState: cartSidbarState = {
	isOpen: false,
};

export const cartSidebarSlice = createSlice({
	name: "cartSidebar",
	initialState,
	reducers: {
		openSidebar: (state: cartSidbarState) => {
			state.isOpen = true;
		},
		changeOpenState: (
			state: cartSidbarState,
			action: { payload: State }
		) => {
			console.log(action.payload);
			state.isOpen = action.payload.isOpen;
		},
	},
});

export const { openSidebar, changeOpenState } = cartSidebarSlice.actions;
export default cartSidebarSlice.reducer;
