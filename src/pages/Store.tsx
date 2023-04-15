import { useAppSelector } from "../redux/store";

export default function Store() {
	const products = useAppSelector((state) => state.products.products);
	const productCards = products.map((product) => (
		<div className="column is-3" key={product.id}>
			<div className="card ">
				<div className="card-image">
					<figure className="image is-128x128">
						<img src={product.image} alt={product.title} />
					</figure>
				</div>
				<div className="card-content">
					<div className="media-content">
						<p className="title is-4">{product.title}</p>
						<p className="subtitle is-6">{product.price}</p>
					</div>

					<div className="content">
						{product.rating.rate} {product.rating.count}
					</div>
				</div>
			</div>
		</div>
	));
	return (
		<div>
			<div className="columns is-desktop is-multiline">
				{productCards}
			</div>
		</div>
	);
}
