import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { openSideBar, openSubmenu, closeSideBar, closeSubmenu } =
		useGlobalContext();
	const displaySubmenu = (e) => {
		openSubmenu();
	};
	return (
		<nav className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="stripe" className="nav-logo" />
					<button className="btn toggle-btn" onClick={openSideBar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							products
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							developers
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							company
						</button>
					</li>
				</ul>
				<button className="btn signin-btn">Sign In</button>
			</div>
		</nav>
	);
};

export default Navbar;
