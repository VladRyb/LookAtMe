import React from 'react';

import { MDBIcon, MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
// import 'https://kit.fontawesome.com/a076d05399.js';

const FooterPage = () => {
  return (
    // <nav className='navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark fixed-bottom'>
    //   <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //     <ul className='navbar-nav mr-auto'>
    //       <li className='nav-item active'>
    //         <a
    //           style={{ color: 'white' }}
    //           href='https://github.com/VladRyb/LookAtMe'
    //           target='_blank'
    //           rel='noopener noreferrer'
    //         >
    //           Наш проект на GitHub
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav class='navbar navbar-dark bg-dark ' id='futer'>
      <span class='navbar-text'>
        <a
          style={{ color: 'white' }}
          href='https://github.com/VladRyb/LookAtMe'
          target='_blank'
          rel='noopener noreferrer'
        >
          Наш проект на GitHub
        </a>
      </span>
    </nav>
  );
};

export default FooterPage;
