import { useState, useEffect } from "react";

type width = number | undefined;

export default function useWindowWidth(): width {
	const [windowWidth, setWindowWidth] = useState<width>(undefined);
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowWidth;
}
