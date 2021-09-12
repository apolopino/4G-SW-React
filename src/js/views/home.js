import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "./personajes";
import { Vehicles } from "./vehicles";
import { Planets } from "./planets";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.setHome(true);
		// console.log("home - estamos en home?: ", store.isHome);
	}, []);

	console.log("el listado de favoritos es: ", store.favList);

	return (
		<div className="container">
			<div className="row">
				<Characters />
			</div>
			<div className="row">
				<Vehicles />
			</div>
			<div className="row">
				<Planets />
			</div>
		</div>
	);
};
