import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowTemp from "./ShowTemp";
import LoadingSpinner from "./LoadingSpinner";
import Namechange from "./Namechange";

function App() {
	const [city, setCity] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isShow, setShow] = useState(false);
	const [isError, setError] = useState(false);
	const [data, setData] = useState({
		description: "",
		temp: 0,
		temp_max: 0,
		temp_min: 0,
		humidity: 0,
		sunrise: 0,
		sunset: 0,
		country: "",
	});

	const handleFetch = () => {
		setIsLoading(true);
		const getData = () => {
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e5467d37f2e832284e1f2cd4c5b047c&units=metric`
				)
				.then((response) => {
					setData({
						description: response.data.weather[0].description,
						temp: response.data.main.temp,
						temp_max: response.data.main.temp_max,
						temp_min: response.data.main.temp_min,
						humidity: response.data.main.humidity,
						sunrise: response.data.sys.sunrise,
						sunset: response.data.sys.sunset,
						country: response.data.sys.country,
					});

					console.log(response.data);

					setShow(true);
					setError(false);
				})
				.catch((error) => {
					setError(true);
					console.log("error has been occured", error);
				});
			setIsLoading(false);
		};

		const timer = setTimeout(() => {
			getData();
			console.log("fsfs");
		}, 2000);
	};
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		handleFetch();
	// 		console.log("fsfs");
	// 	}, 5000);

	// 	return () => clearTimeout(timer);
	// }, [data]);
	return (
		<>
			<Namechange />
			<div className="container h-screen flex justify-center items-center">
				<div className="relative">
					<div className="absolute top-4 left-3">
						<i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
					</div>
					<input
						type="text"
						value={city}
						className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
						placeholder="Search City..."
						onChange={(e) => {
							setCity(e.target.value);
						}}
					/>
					<div className="absolute top-2 right-2">
						<button
							className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
							onClick={handleFetch}
							disabled={isLoading}
						>
							Search
						</button>
					</div>

					{isLoading && <LoadingSpinner />}
					{isShow && <ShowTemp text={data} />}
					{isError && (
						<h1 className="pt-5 font-bold text-center">No data found</h1>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
