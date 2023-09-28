import React, { useContext } from "react";
import SmallCard from "../component/smallCard";
import FavouriteItem from "../component/favouriteItem";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)

	const mappedPeople = store.characters.map(
		(item, index) => {
			return <SmallCard key={index} name={item["name"]} id={item["uid"]} url={item["url"]} gender={item?.props?.gender} hair={item?.props?.hair_color} eye={item?.props?.eye_color} arrIndex={index}  />
		} 
	)

	const mappedVehicles = store.vehicles.map(
		(item, index) => {
			return <SmallCard key={index} name={item["name"]} id={item["uid"]} url={item["url"]} manufacturer={item?.props?.manufacturer} cost={item?.props?.cost_in_credits} arrIndex={index} />
		}
	)

	const mappedPlanets = store.planets.map(
		(item, index) => {
			return <SmallCard key={index} name={item["name"]} id={item["uid"]} url={item["url"]} population={item?.props?.population} terrain={item?.props?.terrain} arrIndex={index} />
		}
	)

	const mappedFavourites = store.favourites.map(
		(item, index) => {
			return (<FavouriteItem key={index} type={item[0]} id={item[1]} name={store[item[0]][item[1]]["name"]}/>)
		}
	)


	return(
	<div className="container">
		{store.problemsExtras ? <div>There was a problem loading the additional information. More information buttons disabled.</div> : ""}
		<h1 className="text-danger mb-3 mt-5">Characters</h1>
		{store.loadingPeople ? <div>Loading the characters... </div>: ""}
		{store.problemsPeople ? <div>There was a problem loading the characters. Please try again later.</div> : ""}
		{(!store.problemsPeople && !store.loadingPeople) ? <div className="d-flex scrollBox">{mappedPeople}</div> : "" }
		<h1 className="text-danger mb-3 mt-5">Vehicles</h1>
		{store.loadingVehicles ? <div>Loading the vehicles... </div>: ""}
		{store.problemsVehicles ? <div>There was a problem loading the vehicles. Please try again later.</div> : ""}
		{(!store.problemsVehicles && !store.loadingVehicles) ? <div className="d-flex scrollBox">{mappedVehicles}</div> : "" }
		<h1 className="text-danger mb-3 mt-5">Planets</h1>
		{store.loadingPlanets ? <div>Loading the planets... </div>: ""}
		{store.problemsPlanets ? <div>There was a problem loading the planets. Please try again later.</div> : ""}
		{(!store.problemsPlanets && !store.loadingPlanets) ? <div className="d-flex scrollBox">{mappedPlanets}</div> : "" }
	</div>
	)

	};
