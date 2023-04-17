export default function Loading() {
	return (
		<div className="my-6">
			<h3 className="is-size-3 my-4 has-text-centered">Loading...</h3>
			<progress className="progress is-large is-primary" max="100">
				15%
			</progress>
		</div>
	);
}
