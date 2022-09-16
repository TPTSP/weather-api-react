import React from "react";

const ShowTemp = ({ text }) => {
	return (
		<>
			<div className="flex flex-col ... mt-5">
				<h5>Description: {text.description}</h5>
				<h5>temp: {text.temp}</h5>
				<h5>temp_max: {text.temp_max}</h5>
				<h5>temp_min: {text.temp_min}</h5>
				<h5>humidity: {text.humidity}</h5>
			</div>
		</>
	);
};

export default ShowTemp;
