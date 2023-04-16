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
	const { rate, count } = rating;
	const roundedRating = Math.round(rate);
	const roundedRatingToHalf = Math.round(rate * 2) / 2;
	const stars = [];
	for (let index = 1; index <= roundedRatingToHalf; index++) {
		stars.push(<i className="fa-solid fa-star"></i>);
	}
	if (roundedRating - roundedRatingToHalf !== 0) {
		stars.push(<i className="fa-solid fa-star-half-stroke"></i>);
	}
	while (stars.length < 5) {
		stars.push(<i className="fa-regular fa-star"></i>);
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
						<p className="subtitle is-5">${price.toFixed(2)}</p>
					</div>

					<div className="content mt-3">
						<p>
							{rate} {stars} {count}
						</p>
						<button className="button is-fullwidth is-primary">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
