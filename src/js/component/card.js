import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<img src={props.url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<div className="card-text">
						{props.contenido.map((item, index) => {
							return (
								<p key={index}>
									{item.label}: {item.value}
								</p>
							);
						})}
					</div>
					<div className="row justify-content-between">
						{/* <a href={props.link} className="btn btn-primary" style={{ color: "#fff" }}>
							Ver Detalle
						</a> */}
						<Link to={props.link}>
							<Button className="btn btn-primary" style={{ color: "#fff" }}>
								Detalle
							</Button>
						</Link>
						<button onClick={() => actions.setFavs(props.title)} className="btn btn-warning ml-a">
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	url: PropTypes.string,
	link: PropTypes.string,
	title: PropTypes.string,
	contenido: PropTypes.array
};
