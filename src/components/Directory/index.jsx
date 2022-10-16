import React from "react";
import MenuItem from "../Menu-item";

import "./styles.scss";

const SECTIONS = [
	{
		title: "hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		id: 1,
		pageUrl: "hats",
	},
	{
		title: "jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		id: 2,
		pageUrl: "",
	},
	{
		title: "sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		id: 3,
		pageUrl: "",
	},
	{
		title: "womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		size: "large",
		id: 4,
		pageUrl: "",
	},
	{
		title: "mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		size: "large",
		id: 5,
		pageUrl: "",
	},
];

function Directory() {
	return (
		<div className="directory-menu">
			{SECTIONS.map(({ id, ...sectionProps }) => (
				<MenuItem key={id} {...sectionProps} />
			))}
		</div>
	);
}

export default Directory;
