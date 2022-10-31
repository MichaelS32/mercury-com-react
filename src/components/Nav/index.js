import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../assets/mercury-logo-dk-bg.png';

function Nav(props) {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/'||'#');

    return (
        <header>
            <nav className=' nav navbar navbar-expand-lg'>
                <Link to='/' className='navbar-brand' >
                    <img src={Logo} alt='mercury logo' className='logo' />
                </Link>
                <ul className='navbar-nav mr-auto  d-flex flex-row justify-content-between'>
                    <NavLink exact='true' className={splitLocation[1] === 'about' ? 'active' : 'nav'} to='/about'>
                        <li className='nav-item p-2'>
                            <div className='nav-text'>
                                About
                            </div>
                        </li>
                    </NavLink>
                    <HashLink smooth className={splitLocation[1] === 'services' ? 'active' : 'nav'} to='/#services'>
                        <li className='nav-item p-2'>
                            <div className='nav-text'>
                                Services
                            </div>
                        </li>
                    </HashLink>
                    <NavLink exact='true' className={splitLocation[1] === 'industries' ?'active' : 'nav'} to='/industries'>
                        <li className='nav-item p-2'>
                            <div className='nav-text'>
                                Industries
                            </div>
                        </li>
                    </NavLink>
                    <HashLink smooth className={splitLocation[1] === 'contact' ?'active' : 'nav'} to='/#contact'>
                        <li className='nav-item p-2'>
                            <div className='nav-text'>
                                Contact
                            </div>
                        </li>
                    </HashLink>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;