import { useAppDispatch, useAppSelector } from "../redux/store";
import { decrementItem, deleteItem } from "../redux/cartSlice";

interface CardItemCardProps {
	title: string;
	quantity: number;
	price: number;
	image: string;
	id: number;
}

export default function CardItemCard({
	title,
	quantity,
	price,
	image,
	id,
}: CardItemCardProps) {
	const dispatch = useAppDispatch();
	const cartState = useAppSelector((state) => state.cart);

	function handleRemoveOne() {
		dispatch(decrementItem(id));
		removeOneLocalStorage();
	}

	function removeOneLocalStorage() {
		const cartStateCopy = JSON.parse(JSON.stringify(cartState)); // make a deep copy
		const { price } = cartStateCopy.cart[id];
		if (cartStateCopy.cart[id].quantity === 1) {
			delete cartStateCopy.cart[id];
		} else {
			cartStateCopy.cart[id].quantity -= 1;
		}
		cartStateCopy.totalPrice -= +price.toFixed(2);
		cartStateCopy.totalItems -= 1;
		localStorage.setItem("cart", JSON.stringify(cartStateCopy));
	}

	function handleDelete() {
		dispatch(deleteItem(id));
	}
	return (
		<div className="box cart-item">
			<h5 className="is-size-5 has-text-weight-bold">{title}</h5>
			<p>
				<i className="fa-solid fa-xmark"></i> {quantity}
			</p>
			<img src={image} alt={title} className="my-3" />
			<p>${price.toFixed(2)} Each</p>
			<button
				className="button is-warning is-fullwidth my-2"
				onClick={handleRemoveOne}
			>
				Remove One from Cart
			</button>
			<button
				className="button is-danger is-fullwidth"
				onClick={handleDelete}
			>
				Remove All from Cart
			</button>
		</div>
	);
}
