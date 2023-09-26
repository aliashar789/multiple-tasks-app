import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						React
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/form">
									Form
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/profile">
									Profile
								</Link>
							</li>
                            <li className="nav-item">
								<Link className="nav-link" to="/survey">
									Survey
								</Link>
							</li>
                            <li className="nav-item">
								<Link className="nav-link" to="/signup">
									Signup
								</Link>
							</li>
						</ul>
						<div className="d-flex">
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Topbar;
