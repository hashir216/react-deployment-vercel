import React from 'react';
import { MdLocalShipping, MdSearch } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure the path is correct
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = ({ search, handleSearchChange }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className='header'>
      <div className='top_header'>
        <div className='icon'>
          <MdLocalShipping />
        </div>
        <div className='info'>
          <p>Free Shipping on orders over $1000</p>
        </div>
      </div>
      <div className='mid_header'>
        <img src='/image/logo.webp' alt='Company Logo' className='logo' />
        <div className='search_box'>
          <input 
            type='text' 
            placeholder='Search' 
            value={search}
            onChange={handleSearchChange}
          />
          <button aria-label='Search'><MdSearch /></button>
        </div>
        {
          isAuthenticated ? (
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ returnTo: window.location.origin })} aria-label='Logout'>Logout</button>
              </div>
            </div>
          ) : (
            <div className='user'>
              <div className='icon'>
                <FiLogIn />
              </div>
              <div className='btn'>
                <button onClick={() => loginWithRedirect()} aria-label='Login'>Login</button>
              </div>
            </div>
          )
        }
      </div>
      <div className='last_header'>
        <div className='user_profile'>
          {
            isAuthenticated ? (
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <p>Please Login</p>
                </div>
              </>
            )
          }
        </div>
        <div className='Nav'>
          <ul>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/Shop' className='link'>Shop</Link></li>
            <li><Link to='/Contact' className='link'>Contact</Link></li>
            <li><Link to='/Cart' className='link'>Cart</Link></li>
          </ul>
        </div>
        <div className='offer'>
          <p>Flat 10% off on all iPhones</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
