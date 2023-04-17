import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import { useAppDispatch } from "./redux/store";
import { fetchProducts } from "./redux/productsSlice";

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProducts("https://fakestoreapi.com/products"));
	}, []);
	return (
		<div className="App " id="outer-container">
			<CartSidebar />
			<Navbar />
			<div className="container" id="page-wrap">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
