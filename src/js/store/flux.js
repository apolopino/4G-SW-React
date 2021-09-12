const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			planetList: [],
			vehicleList: [],
			favList: [],
			isHome: ""
		},

		actions: {
			listaCharacters: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => setStore({ peopleList: data.results }));
			},

			listaPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => setStore({ planetList: data.results }));
			},

			listaVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => setStore({ vehicleList: data.results }));
			},

			setHome: status => {
				setStore({ isHome: status });
			},

			setFavs: fav => {
				// Tengo que traer el store, pues le agregaré algo
				const store = getStore();
				console.log("el fav a agregar es:", fav);
				console.log("los favoritos en store son:", store.favList);
				store.favList.length > 0
					? store.favList.map((item, index) => {
							fav === item
								? (console.log("fav===item returned true"), alert("El favorito ya existe!"))
								: (console.log("fav===item returned false"),
								  setStore({ favList: [...store.favList, fav] }));
					  })
					: setStore({ favList: [...store.favList, fav] });
			}
		}
	};
};

export default getState;
