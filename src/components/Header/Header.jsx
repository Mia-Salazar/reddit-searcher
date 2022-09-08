import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
	const navLinks = [
		{link: "/", text: "Current"},
		{link: "/day", text: "By days"},
		{link: "/map", text: "Map"},
		{link: "/pollution", text: "Air Pollution"},
	];
	return (
		<header className="nes-container with-title is-centered header">
            <h1>Weather</h1>
            <nav className="lists">
                <ul className="nes-list is-disc">
				{
					navLinks.map((link) => {
						return(
							<li className="header__list-item" key={link.text}>
								<Link to={link.link}>{link.text}</Link>
							</li>
						);
					})
				}
			</ul>
            </nav>
		</header>
	);
};

export default Header;