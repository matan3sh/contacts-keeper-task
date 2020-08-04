import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidenav from './Sidenav';
import AboutModal from '../modal/AboutModal';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          Contacts<span>Keeper</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <a href='/#' className='border' onClick={onOpen}>
            About
          </a>
        </li>
      </ul>
      <Sidenav onOpen={onOpen} />
      <AboutModal openModal={openModal} onClose={onClose} />
    </nav>
  );
};

export default Navbar;
