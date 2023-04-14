import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App ">
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
