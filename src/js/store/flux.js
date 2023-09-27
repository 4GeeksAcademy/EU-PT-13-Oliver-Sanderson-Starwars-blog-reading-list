const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: ["loading characters"],
			vehicles: ["loading vehicles"],
			planets: ["loading planets"],
			favourites: [],
			test: 321,

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
				fetch("https://www.swapi.tech/api/people")
				.then((recieved) => recieved.json())
				.then((data) => {
					 setStore({ characters: data.results });
					 getActions().loadCompleteList(getStore().characters)
				})
				.catch((error) => console.log("loadPeople error " + error))
			},

			loadVehicles() {
				fetch("https://www.swapi.tech/api/vehicles")
				.then((recieved) => recieved.json())
				.then((data) => {
					 setStore({	vehicles: data.results });
					 getActions().loadCompleteList(getStore().vehicles)
				})
				.catch((error) => console.log("loadVehicles error " + error))
			},

			loadPlanets() {
				fetch("https://www.swapi.tech/api/planets")
				.then((recieved) => recieved.json())
				.then((data) => {
					 setStore({ planets: data.results })
					 getActions().loadCompleteList(getStore().planets)
				})
				.catch((error) => console.log("loadPlanets error " + error))
			},

			loadCompleteList(originalList) {
				console.log(originalList)
				originalList.forEach(element => {
					fetch(element.url)
					.then((recieved) => recieved.json())
					.then((data) => {
						element["props"] = data.result.properties
						setStore({test: "123"})
					})
					.catch((error) => console.log("loadCompleteList error " + error))
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
