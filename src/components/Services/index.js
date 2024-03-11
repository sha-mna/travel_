import React from 'react'
import "./style.css";

function Services() {
    return (
		<div className="services" id="services">
			<div className="container">
				<div className="mainText">
					<h1>
						<span>S</span>ervices
					</h1>
				</div>
				<div className="row" >
					<div className="col-md-4 py-3 py-md-0">
						<div className="card">
							<i className="fas fa-hotel"></i>
							<div className="cardContent">
								<h3>Affordable Hotel</h3>
								<p>
									Budget friendly accommodations without
									compromising too much on quality.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 py-3 py-md-0">
						<div className="card">
							<i className="fas fa-utensils"></i>
							<div className="cardContent">
								<h3>Food And Drinks</h3>
								<p>
									Offering a rich tapestry of flavors,
									textures and aromas,provide nourishment and
									pleasure.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 py-3 py-md-0">
						<div className="card">
							<i className="fas fa-bullhorn"></i>
							<div className="cardContent">
								<h3>Safety Guide</h3>
								<p>
									Provide information on potential hazards,
									preventive measures, and actions to take in
									case of emergencies.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row" >
					<div className="col-md-4 py-3 py-md-0">
						<div className="card">
							<i className="fas fa-globe-asia"></i>
							<div className="cardContent">
								<h3>Around The World</h3>
								<p>
									Allowing individuals to broaden their
									horizons,learn about diverse cultures and
									create lasting memories.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 py-3 py-md-0">
						<div className="card">
							<i className="fas fa-plane"></i>
							<div className="cardContent">
								<h3>Fastest Travel</h3>
								<p>
									Enables travelers to cover long distances in
									relatively short periods.Offering a fast
									alternative for ceratin travel routes.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 py-3 py-md-0">
						<div className="card">
							<i className="fas fa-hiking"></i>
							<div className="cardContent">
								<h3>Adventures</h3>
								<p>
									Provide an opportunity to challenge one's
									limits,making life more vibrant and
									fulfilling.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services
