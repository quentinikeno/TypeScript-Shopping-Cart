import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<i className="fa-solid fa-shop navbar-item fa-2x"></i>
					<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
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
								<button className="button is-primary is-outlined is-rounded">
									<i className="fa-solid fa-cart-shopping fa-lg"></i>
									<div
										id="number-items"
										className="tag is-danger is-small"
									>
										2
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
