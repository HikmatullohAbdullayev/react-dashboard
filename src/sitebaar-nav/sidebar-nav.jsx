import React from 'react';
import "./sitebar.css"

function SidebarNav() {
    return (

     <>
       <nav className='nav page'>
          <a className='logo' href="#">Dashboard Kit</a>
        <ul className='nav__list list'>
            <li className='list_item item overview'>Overview</li>
            <li className='list_item item tickets'>Tickets</li>
            <li className='list_item item ideas'>Ideas</li>
            <li className='list_item item contacts'>Contacts</li>
            <li className='list_item item agents'>Agents</li>
            <li className='list_item item articles'>Articles</li>
        </ul>
        <ul className='addition'>
            <li className='addition_item item settings'>Settings</li>
            <li className='addition_item item subscription'>Subscription</li>
        </ul>
       </nav>
     </>
    );
}

export default SidebarNav;