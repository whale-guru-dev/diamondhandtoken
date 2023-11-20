import { useEffect, useState } from "react";

const useScroll = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScroll(window.pageYOffset);
		};
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scroll;
};

export default useScroll;
