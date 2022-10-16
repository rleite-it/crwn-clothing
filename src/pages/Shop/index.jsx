import React, { useState } from "react";
import { SHOP_DATA } from "./utils";

import CollectionPreview from "../../components/CollectionPreview";

import "./styles.scss";

function ShopPage() {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps} />
			))}
		</div>
	);
}

export default ShopPage;
