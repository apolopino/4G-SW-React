const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			planetList: [],
			vehicleList: []
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
			}
		}
	};
};

export default getState;
