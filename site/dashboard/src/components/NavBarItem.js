import React from 'react';
import PropTypes from 'prop-types';


function NavBarItem(props) {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
			<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
				<i className={`fas ${props.icon} fa-fw`}></i>
				<span className={`badge badge-${props.color} badge-counter`}>{props.value}</span>
			</a>
		</li>
    )
}

NavBarItem.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    value: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}
NavBarItem.defaultProps = {
    color: 'primary',
}

export default NavBarItem