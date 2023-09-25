import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo-31.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand ms-3"><img src={logo} /></span>
			</Link>

		</nav>
	);
};
