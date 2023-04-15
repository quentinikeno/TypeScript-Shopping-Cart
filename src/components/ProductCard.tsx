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
}

export default function ProductCard({
	id,
	title,
	image,
	price,
	rating,
}: ProductCardProps) {
	return (
		<div className="ProductCard column is-3" key={id}>
			<div className="card pt-3">
				<div className="card-image">
					<figure className="image is-128x128 mx-auto is-flex is-justify-content-center is-align-items-center">
						<img src={image} alt={title} />
					</figure>
				</div>
				<div className="card-content">
					<div className="media-content">
						<p className="title is-4">{title}</p>
						<p className="subtitle is-6">{price}</p>
					</div>

					<div className="content">
						{rating.rate} {rating.count}
					</div>
				</div>
			</div>
		</div>
	);
}
