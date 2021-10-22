import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navigation-bar">
			<Link to="/" className="logo">
				Pollster
			</Link>

			<ul className="nav-list">
				<li className="nav-item">
					<Link to="/publicPolls">
							Public Polls
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about">
							About
					</Link>
				</li>
			</ul>
    </nav>
  );
}

export default Navbar;