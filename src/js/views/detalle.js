import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Detalle = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		let type = props.type;
		let id = parseInt(params.id);
		actions.getDetail(type, id);
	}, []);

	return (
		<div className="container">
			{console.log(store.detalle)}
			<div className="row mt-3 mb-3">
				<div className="col-sm-6">
					<img
						src="https://www.barfchile.com/wp-content/uploads/2019/08/placeholder.png"
						className="img-fluid"
					/>
				</div>
				<div className="col-sm-6">
					<h1>{store.detalle.name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec metus vel purus condimentum
						euismod malesuada in est. Mauris consectetur sem sed mi faucibus feugiat. Mauris ac tortor
						rutrum, mattis turpis et, pellentesque dui. Curabitur consequat euismod elit, nec tincidunt ex
						euismod quis. Cras finibus magna non nunc consequat vehicula. Sed non sollicitudin sem.
						Suspendisse massa ante, iaculis ac purus id, lacinia semper neque.
					</p>
				</div>
			</div>

			<div className="row mt-5 border-top border-danger">
				<div className="col-sm-2 text-center">
					<h5 className="text-danger">Name</h5>
					<p>{store.detalle.name}</p>
				</div>
				{props.type === "people" ? (
					<>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Birth Year</h5>
							<p>{store.detalle.birth_year}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Gender</h5>
							<p>{store.detalle.gender}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Height</h5>
							<p>{store.detalle.height}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Skin Color</h5>
							<p>{store.detalle.skin_color}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Eye Color</h5>
							<p>{store.detalle.hair_color}</p>
						</div>
					</>
				) : props.type === "vehicles" ? (
					<>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Model</h5>
							<p>{store.detalle.model}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Manufacturer</h5>
							<p>{store.detalle.manufacturer}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Cost</h5>
							<p>{store.detalle.cost_in_credits}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Class</h5>
							<p>{store.detalle.vehicle_class}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Passengers</h5>
							<p>{store.detalle.passengers}</p>
						</div>
					</>
				) : (
					<>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Day length</h5>
							<p>{store.detalle.rotation_period}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Climate</h5>
							<p>{store.detalle.climate}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Terrain</h5>
							<p>{store.detalle.terrain}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Population</h5>
							<p>{store.detalle.population}</p>
						</div>
						<div className="col-sm-2 text-center">
							<h5 className="text-danger">Gravity</h5>
							<p>{store.detalle.gravity}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

Detalle.propTypes = {
	type: PropTypes.string
};
