import React, { useContext } from "react";
import SmallCard from "../component/smallCard";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const mappedPeople = store.characters.map(
		(item, index) => {
			return <SmallCard name={item["name"]} id={item["uid"]} url={item["url"]} arrIndex={index}  />
		} 
	)

	const mappedVehicles = store.vehicles.map(
		(item, index) => {
			return <SmallCard name={item["name"]} id={item["uid"]} url={item["url"]} arrIndex={index} />
		}
	)

	const mappedPlanets = store.planets.map(
		(item, index) => {
			return <SmallCard name={item["name"]} id={item["uid"]} url={item["url"]} arrIndex={index} />
		}
	)
	console.log("characters")
	console.log(store.characters)
	console.log(store.characters[0]["props"]) 


	return(
	<div className="container">
		<h1>Eye color test</h1>
		<div>{store.characters[0].props? store.characters[0].props["eye_color"] : "NOT LOADED"}</div>
		<h1 className="text-danger mb-3 mt-5">Characters</h1>
		<div className="d-flex scrollBox">{mappedPeople}</div>
		<h1 className="text-danger mb-3 mt-5">Vehicles</h1>
		<div className="d-flex scrollBox">{mappedVehicles}</div>
		<h1 className="text-danger mb-3 mt-5">Planets</h1>
		<div className="d-flex scrollBox">{mappedPlanets}</div>
	</div>
	)

	};
