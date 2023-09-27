import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SmallCard from "../component/smallCard";
import FavouriteItem from "../component/favouriteItem";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)

	const navigate = useNavigate();

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

	const mappedFavourites = store.favourites.map(
		(item, index) => {
			return (<FavouriteItem type={item[0]} id={item[1]} name={store[item[0]][item[1]]["name"]}/>)
		}
	)



	return(
	<div className="container">
		<h1 className="text-danger mb-3 mt-5">Characters</h1>
		<div className="d-flex scrollBox">{mappedPeople}</div>
		<h1 className="text-danger mb-3 mt-5">Vehicles</h1>
		<div className="d-flex scrollBox">{mappedVehicles}</div>
		<h1 className="text-danger mb-3 mt-5">Planets</h1>
		<div className="d-flex scrollBox">{mappedPlanets}</div>
	</div>
	)

	};
