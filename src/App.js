import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/Shop";
import Login from "./pages/Login";
import Header from "./components/Header";

import { auth } from "./firebase/firebase.utils";
import { useEffect, useState } from "react";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	let unsubscribeFromAuth = null;

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);

			console.log(user);
		});

		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div>
			<Header currentUser={currentUser} />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/signin" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
