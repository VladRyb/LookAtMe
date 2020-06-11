import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import ModalLogin from './ModalLogin';
import ModalSingUp from './ModalSingUp';

export default function NavBar(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark'>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='d-flex justify-content-end'>
        <ul className='navbar-nav mr-auto'>
          {props.user ? (
            <NavDropdown title={props.user.name} id='basic-nav-dropdown'>
              <NavDropdown.Item href='/user'>Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item onClick={props.logout}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <li className='nav-item '>
                <Link className='nav-link'>
                  <ModalLogin />
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link'>
                  <ModalSingUp />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
