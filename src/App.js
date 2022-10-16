import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/Shop";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
		</div>
	);
}

export default App;
