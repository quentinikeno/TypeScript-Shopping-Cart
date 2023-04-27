export default function useGenerateStars(rate: number) {
	const roundedRating = Math.round(rate);
	const roundedRatingToHalf = Math.round(rate * 2) / 2;
	const stars: JSX.Element[] = [];

	for (let index = 1; index <= roundedRatingToHalf; index++) {
		stars.push(<i className="fa-solid fa-star" key={index}></i>);
	}
	if (roundedRating - roundedRatingToHalf !== 0) {
		stars.push(
			<i
				className="fa-solid fa-star-half-stroke"
				key={stars.length + 1}
			></i>
		);
	}
	while (stars.length < 5) {
		stars.push(
			<i className="fa-regular fa-star" key={stars.length + 1}></i>
		);
	}

	return stars;
}
