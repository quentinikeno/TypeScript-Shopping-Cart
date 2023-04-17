import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import { useAppSelector } from "../redux/store";

export default function Store() {
	const { products, isLoading } = useAppSelector((state) => state.products);
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
			{isLoading ? (
				<Loading />
			) : (
				<div className="columns is-desktop is-multiline mt-3 mb-5">
					{productCards}
				</div>
			)}
		</div>
	);
}
