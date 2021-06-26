import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/personajes">
					<button className="btn btn-primary">Personajes</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/vehiculos">
					<button className="btn btn-primary">Vehiculos</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/planetas">
					<button className="btn btn-primary">Planetas</button>
				</Link>
			</div>
		</nav>
	);
};
