import React from "react";
import PropTypes from "prop-types";
import defaultImage from "/Users/hudzah/Documents/Programming/ReactCourse/react-advanced-2020-master/src/assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
	const url = image && image.url;
	return (
		<article className="product">
			product
			<img src={url || defaultImage} alt={name || "default"} />
			<h4>{name}</h4>
			<p>${price}</p>
		</article>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

Product.defaultProps = {
	name: "default name",
	price: 0,
	image: defaultImage,
};

export default Product;
