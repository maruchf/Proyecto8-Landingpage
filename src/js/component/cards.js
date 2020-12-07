//import react into the bundle
import React from "react";

const Cards = () => {
	return (
		<div className="container-fluid col-6">
			<div className="card-deck">
				<div className="card">
					<img
						className="card-img-top"
						src="https://picsum.photos/200/150"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="https://picsum.photos/200/150"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="https://picsum.photos/200/150"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
