import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './navbar.less';

const Navbar = () => {
  const { SubMenu } = Menu;
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY > 65);
    };
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={cx(styles.navbar, { [styles.fixed]: isFixed })} id="navbar">
      <span className={styles.logo}>Portfolio</span>
      <div className={styles.navRight}>
        <ul className={styles.ul}>
          <li>
            <a href="#aboutMe">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>

          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/signIn">
              <span>Sign In</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/signUp">
              <span>Sign Up</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/dashboard">
              <span>DashBoard</span>
            </NavLink>
          </li>
        </ul>
        <div className={styles.menu}>
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub4" icon={<MenuOutlined />} title="Menu">
              <Menu.Item key="9">
                <a href="#aboutMe">About </a>
              </Menu.Item>
              <Menu.Item key="10">
                <a href="#skills">Skills </a>
              </Menu.Item>
              <Menu.Item key="11">
                <a href="#service">Service </a>
              </Menu.Item>
              <Menu.Item key="12">
                <a href="#contact">Contact Me </a>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
