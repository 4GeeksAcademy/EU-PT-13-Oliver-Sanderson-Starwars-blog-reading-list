const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			loadingPeople: true,
			problemsPeople: false,
			loadingVehicles: true,
			problemsVehicles: false,
			loadingPlanets: true,
			problemsPlanets: false,
			loadingExtras: true,
			problemsExtras: false,
			characters: ["loading characters"],
			vehicles: ["loading vehicles"],
			planets: ["loading planets"],
			favourites: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadPeople() {
				setStore({ loadingPeople: true });
				setStore({problemsPeople : false});
				fetch("https://www.swapi.tech/api/people")
				.then((recieved) => {if (!recieved.ok) {setStore({problemsPeople : true})}; return recieved.json()})
				.then((data) => {
					 setStore({ characters: data.results });
					 setStore({ loadingPeople: false });
					 getActions().loadCompleteList(getStore().characters)
				})
				.catch((error) => {setStore({problemsPeople : true}); console.log("loadPeople error " + error)})
			},

			loadVehicles() {
				setStore({ loadingVehicles: true });
				setStore({problemsVehicles : false});
				fetch("https://www.swapi.tech/api/vehicles")
				.then((recieved) => {if (!recieved.ok) {setStore({problemsVehicles : true})}; return recieved.json()})
				.then((data) => {
					 setStore({	vehicles: data.results });
					 setStore({ loadingVehicles: false });
					 getActions().loadCompleteList(getStore().vehicles)
				})
				.catch((error) => {setStore({problemsVehicles : true}); console.log("loadVehicles error " + error)})
			},

			loadPlanets() {
				setStore({ loadingPlanets: true });
				setStore({problemsPlanets : false});
				fetch("https://www.swapi.tech/api/planets")
				.then((recieved) => {if (!recieved.ok) {setStore({problemsPlanets : true})}; return recieved.json()})
				.then((data) => {
					 setStore({ planets: data.results });
					 setStore({ loadingPlanets: false });
					 getActions().loadCompleteList(getStore().planets)
				})
				.catch((error) => {setStore({problemsPlanets : true}); console.log("loadPlanets error " + error)})
			},

			loadCompleteList(originalList) {
				console.log(originalList)
				originalList.forEach(element => {
					setStore({loadingExtras: true });
					setStore({problemsExtras : false});
					fetch(element.url)
					.then((recieved) => {if (!recieved.ok) {setStore({problemsExtras : true})}; return recieved.json()})
					.then((data) => {
						element["props"] = data.result.properties
						setStore({ loadingExtras: false }); //if removeing this make sure something sets store as this makes it refresh
					})
					.catch((error) => {setStore({problemsExtras : true});console.log("loadCompleteList error " + error)})
				});
			},

			addFavourite(type, arrIndex) {

				let dupilcate = null

				getStore().favourites.forEach((item, index) => {
					if ((item[0] === type) && (item[1] === arrIndex)) {
						dupilcate = index.toString() //now filter using this index
					}
				})

				if (dupilcate) {
					let newFaveList = getStore().favourites.filter((fav, index) => {
						return index != parseInt(dupilcate)
					})
					setStore({favourites: newFaveList})
					} else {
					let newFave = getStore().favourites.push([type,arrIndex])
					setStore({favourites: getStore().favourites})
				}


			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
