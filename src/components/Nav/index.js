import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/mercury-large-logo.png';

function Nav(props) {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    return (
        <header>
            <nav className=' nav navbar navbar-expand-lg'>
                <Link to='/' className='navbar-brand' >
                    <img src='Logo' alt='mercury logo' />
                </Link>
                <ul className='navbar-nav mr-auto  d-flex flex-row justify-content-between'>
                    <NavLink exact='true' className={splitLocation[1] === 'about' ? 'active' : 'nav'} to='/about'>
                        <li className='nav-item p-2'>
                            <h2>
                                About Us
                            </h2>
                        </li>
                    </NavLink>
                    <NavLink exact='true' className={splitLocation[1] === 'services' ? 'active' : 'nav'} to='/services'>
                        <li className='nav-item p-2'>
                            <h2>
                                Our Services
                            </h2>
                        </li>
                    </NavLink>
                    <NavLink exact='true' className={splitLocation[1] === 'industries' ?'active' : 'nav'} to='/industires'>
                        <li className='nav-item p-2'>
                            <h2>
                                Industries
                            </h2>
                        </li>
                    </NavLink>
                    <NavLink exact='true' className={splitLocation[1] === 'contact' ?'active' : 'nav'} to='/contact'>
                        <li className='nav-item p-2'>
                            <h2>
                                Contact Us
                            </h2>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;