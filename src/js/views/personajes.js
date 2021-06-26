import React from "react";
import { Card } from "../component/card.js";

export const Characters = () => {
	return (
		<div className="container">
			<h1>Personajes</h1>
			<row className="row">
				<Card title="TITULO 1" />
				<Card />
				<Card />
			</row>
		</div>
	);
};
