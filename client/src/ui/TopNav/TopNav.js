import React from 'react';
import './TopNav.scss';
import logo from '../../static/logo.svg';

const TopNavLink = ({title, active}) => {
  return (
    <li className={active && "active"}>
      <a href="#">{title}</a>
    </li>
  );
};

const TopNav = ({children}) => {
  return (
    <nav className="top-nav">
      <a href="https://paxful.com" target="_blank" rel="noopener noreferrer">
        <img src={logo} className="logo" alt="Paxful logo" />
      </a>
      <ul>{children}</ul>
    </nav>
  );
};

export {TopNav, TopNavLink};
