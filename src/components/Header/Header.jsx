import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
	const navLinks = [
		{link: "/", text: "Home"}
	];
	return (
		<header class="nes-container with-title is-centered header">
            <h1>Reddit posts</h1>
            <nav>
                <ul>
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