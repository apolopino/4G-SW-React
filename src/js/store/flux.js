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

				const content = element => element === fav;
				const index = store.favList.findIndex(content);

				index > -1 ? alert("Elemento ya existe!") : setStore({ favList: [...store.favList, fav] });
			},

			deleteFavs: item => {
				const store = getStore();

				const content = element => element === item;
				const index = store.favList.findIndex(content);

				store.favList.splice(index, 1);
				setStore({ favlist: store.favList });
			}
		}
	};
};

export default getState;
