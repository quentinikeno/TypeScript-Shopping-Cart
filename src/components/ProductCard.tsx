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
		<div className="column is-3" key={id}>
			<div className="card ">
				<div className="card-image">
					<figure className="image is-128x128">
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
