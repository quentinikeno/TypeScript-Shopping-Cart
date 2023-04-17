import { slide as Menu, State } from "react-burger-menu";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { changeOpenState } from "../redux/cartSideBarSlice";
import useWindowWidth from "../hooks/useWindowWidth";
import "./cartSidebar.css";

export default function cartSidebar() {
	const dispatch = useAppDispatch();
	const { isOpen } = useAppSelector((state) => state.cartSidebar);
	const cartItems = useAppSelector((state) => state.cart);
	const cartItemsTSX: JSX.Element[] = [];
	const windowWidth: number | undefined = useWindowWidth();

	for (const [key, value] of Object.entries(cartItems.cart)) {
		cartItemsTSX.push(
			<div className="box cart-item">
				<h5 className="is-size-5 has-text-weight-bold">
					{value.title}
				</h5>
				<p>
					<i className="fa-solid fa-xmark"></i> {value.quantity}
				</p>
				<img src={value.image} alt={value.title} className="my-3" />
				<p>${value.price.toFixed(2)} Each</p>
			</div>
		);
	}

	return (
		<Menu
			right
			isOpen={isOpen}
			onStateChange={(state: State) => dispatch(changeOpenState(state))}
			customBurgerIcon={false}
			width={
				typeof windowWidth === "number" && windowWidth < 500
					? "100%"
					: "500px"
			}
		>
			<h2 className="is-size-4 has-text-light">
				Your Cart <i className="fa-solid fa-cart-shopping fa-lg"></i>
			</h2>
			<hr />
			{cartItemsTSX.length ? (
				cartItemsTSX
			) : (
				<p className="has-text-light is-size-4">Your Cart is Empty.</p>
			)}
			<hr />
			<p className="is-size-4 has-text-light pb-5">
				Total: ${cartItems.totalPrice.toFixed(2)}
			</p>
		</Menu>
	);
}
