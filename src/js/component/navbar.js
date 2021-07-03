import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
			<div className="ml-3">
				<Link to="/vehiculos">
					<button className="btn btn-primary">Vehiculos</button>
				</Link>
			</div>
			<div className="ml-3">
				<Link to="/planetas">
					<button className="btn btn-primary">Planetas</button>
				</Link>
			</div>

			<div className="dropdown">
				<a
					className="btn btn-secondary dropdown-toggle ml-3"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favoritos {store.favList.length}
				</a>
				{/* Por alguna razón no funciona el dropdown, pero el browser si actualiza los elements al mirar inspeccionar */}
				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.favList.map((item, index) => {
						return (
							<a key={index} className="dropdown-item" href="#">
								{item}
							</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
