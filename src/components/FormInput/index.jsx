import React from "react";

import "./styles.scss";

function FormInput({ handleChange, label, ...inputProps }) {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...inputProps} />
			{label ? (
				<label
					className={`${
						inputProps.value.length ? "shring" : ""
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
}

export default FormInput;
