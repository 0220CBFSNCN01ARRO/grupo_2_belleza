import React from 'react';



function SidebarItem({active, text, url, icon}) {
    return (
        <li className={`nav-item ${active ? 'active' : ''}`}>
            <a className="nav-link" href={url}>
                <i className={`fas fa-fw${icon}`}></i>
            <span>{text}</span></a>
        </li>
        )
    }
    
    export default SidebarItem