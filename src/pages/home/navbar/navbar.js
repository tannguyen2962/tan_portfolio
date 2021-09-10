import React from 'react';

import { StarOutlined } from '@ant-design/icons';

import { NavLink } from 'react-router-dom';
import styles from './navbar.less';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Portfolio</span>
      <div className={styles.navRight}>
        <ul className={styles.ul}>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/">
              {' '}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/about">
              {' '}
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/skills">
              {' '}
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/services">
              {' '}
              Services
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/contactme">
              {' '}
              ContactMe
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/">
              {' '}
              <StarOutlined />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
