import { NavLink, Link } from "react-router-dom";
import womanShopping from "../assets/woman-shopping.png";
import guyShopping from "../assets/guy-shopping.png";
import "./Home.css";

export default function Home() {
	return (
		<>
			<section className="hero is-medium mt-3 has-background-light">
				<div className="hero-body">
					<div className="columns">
						<div className="column">
							<h1 className="title is-size-1 mt-3">
								The Fake Store
							</h1>
							<NavLink to="/store">
								<button className="button is-large is-responsive is-primary">
									Shop Now
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</section>
			<section className="columns is-desktop has-text-centered">
				<div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd mx-auto">
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
					<div className="p-5">
						<h2 className="is-size-2">
							Find everything you want online.
						</h2>
						<p className="mt-3">
							Convenient shopping from your browser.
						</p>
					</div>
				</div>
				<div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd mx-auto">
					<img src={guyShopping} alt="Guy shopping on laptop." />
				</div>
			</section>
		</>
	);
}
