import { useAppDispatch, useAppSelector } from "../redux/store";
import { incrementItem } from "../redux/cartSlice";
import { toast } from "react-hot-toast";
import useToggleState from "../hooks/useToggleState";
import useGenerateStars from "../hooks/useGenerateStars";
import "./ProductCard.css";

interface ProductCardProps {
	id: number;
	title: string;
	price: number;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	description: string;
}

export default function ProductCard({
	id,
	title,
	image,
	price,
	rating,
	description,
}: ProductCardProps) {
	const dispatch = useAppDispatch();
	const cartState = useAppSelector((state) => state.cart);
	const { rate, count } = rating;
	const stars = useGenerateStars(rate);
	const [isShowing, setIsShowing] = useToggleState(false);

	function handleClick() {
		dispatch(incrementItem({ id, title, image, price }));
		addItemLocalStorage();
		toast.success("Added to Cart!");
	}

	function toggleDescription() {
		setIsShowing();
	}

	function addItemLocalStorage() {
		const cartStateCopy = JSON.parse(JSON.stringify(cartState)); // make a deep copy
		if (Object.hasOwn(cartState.cart, id)) {
			cartStateCopy.cart[id].quantity += 1;
		} else {
			cartStateCopy.cart[id] = { title, image, quantity: 1, price };
		}
		cartStateCopy.totalPrice += +price.toFixed(2);
		cartStateCopy.totalItems += 1;
		localStorage.setItem("cart", JSON.stringify(cartStateCopy));
	}

	return (
		<div
			className="ProductCard mx-auto column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
			key={id}
		>
			<div className="card has-background-light">
				<div className="card-image py-3 has-background-white">
					<figure className="image is-128x128 mx-auto is-flex is-justify-content-center is-align-items-center">
						<img src={image} alt={title} />
					</figure>
				</div>
				<div className="card-content">
					<div className="media-content">
						<p className="title is-4">{title}</p>
					</div>

					<div className="content mt-3">
						<p className="subtitle is-5">${price.toFixed(2)}</p>

						<p>
							{rate} {stars} {count}
						</p>

						<button
							onClick={handleClick}
							className="button is-fullwidth is-primary"
						>
							Add to Cart
						</button>

						<div>
							<button
								className="card-header-icon px-0"
								aria-label="more options"
								onClick={toggleDescription}
							>
								See More
								<span className="icon">
									<i
										className={`pt-1 fas fa-angle-${
											isShowing ? "up" : "down"
										}`}
										aria-hidden="true"
									></i>
								</span>
							</button>
						</div>

						{isShowing && (
							<p className="description">{description}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
