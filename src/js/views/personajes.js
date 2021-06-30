import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.listaCharacters();
	}, []);

	return (
		<div className="container">
			<h1>Personajes</h1>
			<row className="row">
				{store.peopleList.map((item, index) => {
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
						/>
					);
				})}
			</row>
		</div>
	);
};
