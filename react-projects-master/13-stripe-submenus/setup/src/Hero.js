import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();
	return (
		<section className="hero">
			<div className="hero-center">
				<article className="hero-info">
					<h1>Payment infrastructure for the internet</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ullam, magnam. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Magnam, illo.
					</p>
					<button className="btn" onClick={closeSubmenu}>
						Start now
					</button>
				</article>
				<article className="hero-images">
					<img src={phoneImg} alt="phone" className="hero-phone" />
				</article>
			</div>
		</section>
	);
};

export default Hero;
