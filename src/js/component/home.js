//import react into the bundle
import React from "react";

//include components
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Jumbotron />
				<Cards />
				<Footer />
			</React.Fragment>
		);
	}
}
