import React, { Component } from "react";

export const Footer = () => (
	<footer
		className="footer mt-auto py-3 text-center"
		style={{
			position: "fixed",
			bottom: 0,
			left: 0,
			"text-align": "center!important",
			width: "100%"
		}}>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by
			{"Apolo Pino"} in
			<a href="http://www.4geeksacademy.com"> 4Geeks Academy</a>
		</p>
	</footer>
);
