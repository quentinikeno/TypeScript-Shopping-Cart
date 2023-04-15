import ProductCard from "../components/ProductCard";
import { useAppSelector } from "../redux/store";

export default function Store() {
	const products = useAppSelector((state) => state.products.products);
	const productCards = products.map((product) => (
		<ProductCard
			id={product.id}
			image={product.image}
			title={product.title}
			price={product.price}
			rating={product.rating}
			key={product.id}
		/>
	));
	return (
		<div>
			<div className="columns is-desktop is-multiline">
				{productCards}
			</div>
		</div>
	);
}
