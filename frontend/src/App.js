import React, { useState, useEffect } from "react"; //Detecte et raffraichit à chaque changement d'etat
import Header from "./components/Header"; // On importe le component Header
import Footer from "./components/Footer"; // On importe le component Footer
import LogIn from "./components/Login"; // On importe le component Login
import SignUp from "./components/SignUp"; // On importe le component SignUp
import Profile from "./components/Profile"; //on importe le composant Profile
import Post from "./components/Posts"; //on importe le composant Posts
import Alert from "./components/Alert"; // On importe le component Alert
import jwt_decode from "jwt-decode"; // jwt-decode gère les token
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"; // On importe notre router
import { UserContext } from "./components/Context"; // On importe le component Context (qui contient UserContext)
import { handleProfile } from "./api/users"; // on importe le handleProfile contenu dans l'api users
import "./App.css";

const dotenv = require("dotenv");
dotenv.config();

const isMyTokenValid = () => {
	if (localStorage.getItem("token")) {
		const decodedToken = jwt_decode(localStorage.getItem("token"));
		const dateNow = new Date();
		if (decodedToken.exp > dateNow / 1000) {
			return true;
		} else {
			localStorage.clear();
			window.location = "/";
		}
	}
};

const PrivateRoute = ({ component: Component, path }) => {
	return (
		<Route
			exact
			path={path}
			render={() =>
				isMyTokenValid() ? <Component /> : <Redirect to="/login" />
			}
		></Route>
	);
};

const App = () => {
	const [profile, setProfile] = useState(null);
	const [alert, setAlert] = useState(null);

	const handleAlert = (status, text) => {
		setAlert({ status, text });
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};
	useEffect(() => {
		if (!profile && isMyTokenValid()) {
			handleProfile()
				.then(res => {
					setProfile(res.data.user);
				})
				.catch(error => handleAlert("danger", "Something gone wrong"));
		}
	}, [profile]);

	// on utilise provider pour définir les propriétés de UserContext
	return (
		<Router>
			<div className="App">
				<UserContext.Provider
					value={{ profile, setProfile, handleAlert, alert, isMyTokenValid }}
				>
					<Header />
					{alert && <Alert status={alert.status} text={alert.text} />}
					<Route exact path="/" component={SignUp} />
					<Route exact path="/login" component={LogIn} />
					<PrivateRoute exact path="/myprofile/" component={Profile} />
					<PrivateRoute exact path="/wall" component={Post} />
					<PrivateRoute exact path="/wall/:UserId" component={Post} />
				</UserContext.Provider>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
