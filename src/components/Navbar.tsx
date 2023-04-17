import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { openSidebar } from "../redux/cartSideBarSlice";
import useToggleState from "../hooks/useToggleState";
import "./Navbar.css";

export default function Navbar() {
	const dispatch = useAppDispatch();
	const { totalItems } = useAppSelector((state) => state.cart);
	const [hamburger, setHamburger] = useToggleState(false);

	function handleClick() {
		dispatch(openSidebar());
	}

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<i className="fa-solid fa-shop navbar-item fa-2x"></i>
					<a
						role="button"
						className={`navbar-burger ${
							hamburger ? "is-active" : ""
						}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarTarget"
						onClick={setHamburger}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div
					id="navbarTarget"
					className={`navbar-menu ${hamburger ? "is-active" : ""}`}
				>
					<div className="navbar-start">
						<NavLink to="/" className="navbar-item">
							Home
						</NavLink>
						<NavLink to="/store" className="navbar-item">
							Store
						</NavLink>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<button
									className="button is-primary is-outlined is-rounded"
									onClick={handleClick}
								>
									<i className="fa-solid fa-cart-shopping fa-lg"></i>
									<div
										id="number-items"
										className="tag is-danger is-small"
									>
										{totalItems}
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
