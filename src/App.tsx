import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import { useAppDispatch } from "./redux/store";
import { fetchProducts } from "./redux/productsSlice";
import { setInitialState } from "./redux/cartSlice";

function App() {
	const dispatch = useAppDispatch();

	function updateCartFromLocalStorage() {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			dispatch(setInitialState(JSON.parse(storedCart)));
		}
	}

	useEffect(() => {
		dispatch(fetchProducts("https://fakestoreapi.com/products"));
		updateCartFromLocalStorage();
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
			<Footer />
		</div>
	);
}

export default App;
