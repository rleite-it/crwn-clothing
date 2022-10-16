import React from "react";

import "./styles.scss";

function CustomButton({ children, isGoogleSignIn, ...buttonProps }) {
	return (
		<button
			className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
			{...buttonProps}
		>
			{children}
		</button>
	);
}

export default CustomButton;
