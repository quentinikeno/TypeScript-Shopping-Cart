import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="footer">
			<p className="has-text-centered title">The Fake Store</p>
			<ul className="content has-text-centered is-size-5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/store">Store</Link>
				</li>
			</ul>
		</footer>
	);
}
