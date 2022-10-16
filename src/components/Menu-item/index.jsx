import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

function MenuItem({ title, imageUrl, size, pageUrl }) {
	const navigate = useNavigate();

	return (
		<div className={`menu-item ${size}`} onClick={() => navigate(`${pageUrl}`)}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
}

export default MenuItem;
