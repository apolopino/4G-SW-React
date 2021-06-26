import React, { useState, useEffect } from "react";
import { Card } from "../component/card.js";

export const Characters = () => {
	const [listado, setListado] = useState([]);

	const listaCharacters = () => {
		fetch("https://swapi.dev/api/people/?page=2", {
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
			<h1>Personajes</h1>
			<row className="row">
				{listado.map((item, index) => {
					return (
						<Card
							key={index}
							url="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							title={item.name}
							gender={item.gender}
							hair={item.hair_color}
							eyes={item.eye_color}
						/>
					);
				})}
			</row>
		</div>
	);
};
