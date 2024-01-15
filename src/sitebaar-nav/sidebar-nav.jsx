import React from 'react';

function SidebarNav() {
    return (

     <>
    <a href="#">Dashboard Kit</a>
       <nav className='nav page'>
        <ul className='nav__list list'>
            <li className='list_item item'>Overview</li>
            <li className='list_item item'>Tickets</li>
            <li className='list_item item'>Ideas</li>
            <li className='list_item item'>Contacts</li>
            <li className='list_item item'>Agents</li>
            <li className='list_item item'>Articles</li>
        </ul>
        <ul className='addition'>
            <li className='addition_item item'>Settings</li>
            <li className='addition_item item'>Subscription</li>
        </ul>
       </nav>
     </>
    );
}

export default SidebarNav;