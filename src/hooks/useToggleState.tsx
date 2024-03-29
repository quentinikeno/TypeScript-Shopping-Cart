import { useState } from "react";

const useToggleState = (initialState: boolean): [boolean, () => void] => {
	const [isToggled, setToggled] = useState(initialState);
	const toggle = () => {
		setToggled((isToggled) => !isToggled);
	};
	return [isToggled, toggle];
};

export default useToggleState;
