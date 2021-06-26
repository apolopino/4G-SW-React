import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<img src={props.url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						Gender: {props.gender}
						<br />
						Hair: {props.hair}
						<br />
						Eyes: {props.eyes}
					</p>
					<a href={props.link} className="btn btn-primary">
						Ver Detalle
					</a>
					{/* Agregar boton like */}
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	link: PropTypes.string
};
