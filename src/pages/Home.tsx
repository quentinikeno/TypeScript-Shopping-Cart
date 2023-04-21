import { NavLink, Link } from "react-router-dom";
import womanShopping from "../assets/woman-shopping.png";
import guyShopping from "../assets/guy-shopping.png";
import "./Home.css";

export default function Home() {
	return (
		<>
			<section className="hero is-medium mt-3 has-text-centered">
				<div className="hero-body">
					<div>
						<h1 className="title is-size-1 has-text-white mt-3">
							The Fake Store
						</h1>
						<button className="button is-primary">
							<NavLink to="/store" className="has-text-white">
								Shop Now
							</NavLink>
						</button>
					</div>
				</div>
			</section>
			<section className="columns is-desktop has-text-centered">
				<div className="column is-one-third">
					<img
						src={womanShopping}
						alt="Woman with a shopping cart."
					/>
				</div>
				<div className="column is-flex is-justify-content-center is-align-items-center">
					<div>
						<h2 className="is-size-2">
							Easily find what you need.
						</h2>
						<p className="mt-3">
							Shop from dozens of items as seen on{" "}
							<Link to="https://fakestoreapi.com">
								fakestoreapi.com
							</Link>
						</p>
					</div>
				</div>
			</section>
			<section className="columns is-desktop has-text-centered">
				<div className="column is-flex is-justify-content-center is-align-items-center">
					<div>
						<h2 className="is-size-2">
							Find everything you want online.
						</h2>
						<p className="mt-3">
							Convenient shopping from your browser.
						</p>
					</div>
				</div>
				<div className="column is-one-third">
					<img src={guyShopping} alt="Guy shopping on laptop." />
				</div>
			</section>
		</>
	);
}
