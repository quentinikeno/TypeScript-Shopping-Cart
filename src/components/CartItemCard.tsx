import { useAppDispatch } from "../redux/store";
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

	function handleRemoveOne() {
		dispatch(decrementItem(id));
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
