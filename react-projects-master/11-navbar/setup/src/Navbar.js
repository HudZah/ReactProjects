import React, { useState, useRef, useEffect } from "react";
import { FaAdobe, FaAirbnb, FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
	const [showToggle, setShowToggle] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		console.log(linksHeight);
		if (showToggle) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showToggle]);

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo" />
					<button
						className="nav-toggle"
						onClick={() => {
							setShowToggle(!showToggle);
						}}
					>
						<FaBars />
					</button>
				</div>
				<div
					className="links-container show-container"
					ref={linksContainerRef}
				>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="social-icons">
					{social.map((item) => {
						const { id, url, icon } = item;
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
