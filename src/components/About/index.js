import React from "react";
import "./style.css";

function About() {
	return (
		<div className="about" id="about">
			<div className="container">
				<div className="mainText">
					<h1>
						About<span>Us</span>
					</h1>
				</div>
				<div className="row" >
					<div className="col-md-6 py-3 py-md-0">
						<div className="card">
							<img src="./images/world.jpg" alt="" />
						</div>
					</div>
					<div className="col-md-6 py-3 py-md-0">
						<h2>How Travel Agency Work</h2>
						<p>
							India's leading travel website, offering you the
							best prices on flights, hotels and holiday packages
							across India and the world. Our goal is to be your
							travel partner and agency. We are dedicated to
							meeting and exceeding your travel and vacation
							requirements whether you are traveling on business
							or corporate or planning the perfect vacation. As a
							travel agency and travel management company with
							over 10 years of experience, we offer a full
							complement of services for our corporate clients
							including a meeting & incentive program and an
							exclusive selection of escorted tours, student
							performance tours, and holiday travel for our
							leisure clients.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
