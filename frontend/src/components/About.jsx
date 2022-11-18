import React from "react";
import Navbar from "./Navbar";

// This is a static page used to display information about the web application and its creators.

const About = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="box">
					This is a simple polling web application that helps people to create polls and take surveys, vote for polls and view statistics.
				</div>
			</div>
		</>
	);
};

export default About;
