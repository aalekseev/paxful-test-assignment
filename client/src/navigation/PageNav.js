import React from 'react';
import "./PageNav.scss";

const PageNavLink = ({title, active}) => {
  return (
    <li className={active && "active"}>
      <a href="#">{title}</a>
    </li>
  )
};

const PageNav = ({children}) => {
  return (
    <nav className="page-nav">
      <ul>{children}</ul>
    </nav>
  );
};

export {PageNav, PageNavLink};
