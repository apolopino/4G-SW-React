import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const deleteFav = () => {
		console.log("delete fav");
	};

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
					className="btn btn-secondary dropdown-toggle ml-3 mr-5 pr-1"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favoritos {store.favList.length}
				</a>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.favList.map((item, index) => {
						return (
							<div key={`div-${index}`} className="dropdown-item">
								<span className="mr-3" key={index} href="#">
									{item}
								</span>
								<button onClick={() => deleteFav()}>
									<i className="far fa-trash-alt" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
