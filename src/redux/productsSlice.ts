import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../interfaces/ProductInterface";
import axios from "axios";

export interface ProductsState {
	products: Product[];
	isLoading: boolean;
	error: string;
}

const initialState: ProductsState = {
	products: [],
	isLoading: false,
	error: "",
};

export const fetchProducts = createAsyncThunk(
	"products/fetch",
	async (URL: string, { rejectWithValue }) => {
		try {
			const response = await axios.get(URL);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				rejectWithValue(error.message);
			}
		}
	}
);

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
			state.error = "";
		});
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			if (typeof action.payload === "string") {
				state.error = action.payload;
			}
			state.isLoading = false;
		});
	},
});

export default productsSlice.reducer;
