import { useEffect, useState } from "react";

const useMobile = () => {
	const [mobile, setMobile] = useState(true);

	const handleMobile = () => {
		const width = window.innerWidth;
		if (width < 992) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	useEffect(() => {
		handleMobile();
		window.addEventListener("resize", handleMobile);
	}, []);

	return mobile;
};

export const useScreenSize = () => {
	const [screen, setScreen] = useState(true);

	const handleMobile = () => {
		const width = window.innerWidth;
		setScreen(width);
	};

	useEffect(() => {
		handleMobile();
		window.addEventListener("resize", handleMobile);
	}, []);

	return screen;
};

export default useMobile;
