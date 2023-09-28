import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/star-wars-logo-31.png";
import { Context } from "../store/appContext";
import FavouriteItem from "../component/favouriteItem";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	const navigate = useNavigate();

	const mappedFavourites = store.favourites.map(
		(item, index) => {
			return (<FavouriteItem type={item[0]} id={item[1]} name={store[item[0]][item[1]]["name"]}/>)
		}
	)

	return (
		<nav className="navbar navbar-secondary bg-secondary mb-3">

					<Link to="/">
						<span className="navbar-brand ms-4"><img src={logo} /></span>
					</Link>


			<div className="nav-item me-4">
				<select className="form-select" onChange={(e) => {
					console.log(e.target.value)
					navigate("/profile/" + e.target.value);
				}}>
					<option selected disabled>-- Select favourite --</option>
					{mappedFavourites}
				</select>
			</div>



		</nav>
	);
};
