import { slide as Menu, State } from "react-burger-menu";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { changeOpenState } from "../redux/cartSideBarSlice";
import useWindowWidth from "../hooks/useWindowWidth";
import CardItemCard from "./CartItemCard";
import "./CartSidebar.css";

export default function CartSidebar() {
	const dispatch = useAppDispatch();
	const { isOpen } = useAppSelector((state) => state.cartSidebar);
	const cartItems = useAppSelector((state) => state.cart);
	const cartItemsTSX: JSX.Element[] = [];
	const windowWidth: number | undefined = useWindowWidth();

	for (const [key, value] of Object.entries(cartItems.cart)) {
		const id = parseInt(key);
		cartItemsTSX.push(
			<CardItemCard
				title={value.title}
				quantity={value.quantity}
				image={value.image}
				price={value.price}
				id={id}
				key={id}
			/>
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
				Total: $
				{(Math.round(+cartItems.totalPrice * 100) / 100).toFixed(2)}
			</p>
		</Menu>
	);
}
