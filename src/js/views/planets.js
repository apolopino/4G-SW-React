import React, { useState, useEffect } from "react";
import { Card } from "../component/card.js";

export const Planets = () => {
	const [listado, setListado] = useState([]);

	const listaCharacters = () => {
		fetch("https://swapi.dev/api/planets/", {
			method: "GET"
		})
			.then(res => res.json())
			.then(data => setListado(data.results));
	};

	useEffect(() => {
		listaCharacters();
	}, []);

	return (
		<div className="container">
			<h1>Planetas</h1>
			<row className="row">
				{listado.map((item, index) => {
					const dataPerson = [
						{
							label: "Gender",
							value: item.gender
						},
						{
							label: "Hair",
							value: item.hair_color
						},
						{
							label: "Eyes",
							value: item.eye_color
						}
					];
					return (
						<Card
							key={index}
							url="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							title={item.name}
							contenido={dataPerson}
							// gender={item.gender}
							// hair={item.hair_color}
							// eyes={item.eye_color}
						/>
					);
				})}
			</row>
		</div>
	);
};
