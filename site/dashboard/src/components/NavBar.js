import React from 'react';
import NavBarItem from './NavBarItem';
import avatar from '../assets/images/dummy-avatar.jpg';

const links = [
	{
		icon: 'fa-bell',
		value: 3,
		color: 'warning',
		url: '/'
	},
	{
		icon: 'fa-envelope',
		value: 7,
		color: 'danger',
		url: '/'
	}
]


function NavBar(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					<ul className="navbar-nav ml-auto">

						{links.map((onelink,i) => <NavBarItem key={i} {...onelink} />)}

						<div className="topbar-divider d-none d-sm-block"></div>

						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
								<img src={avatar} alt="avatar" className="img-profile rounded-circle" width="60" />
							</a>
						</li>
					</ul>
				</nav>
    )
}

export default NavBar