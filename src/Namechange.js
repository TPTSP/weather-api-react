import React, { useState } from "react";
//toggling the name on button click
const Namechange = () => {
	const [name, setname] = useState(false);

	const onChangename = () => {
		setname(!name);
	};

	return (
		<>
			<div>{name ? "parth" : "solanki"}</div>

			<button type="button" className="bg-red-600 p-5" onClick={onChangename}>
				{name ? "CLick" : "Remove"}
			</button>
		</>
	);
};

export default Namechange;
