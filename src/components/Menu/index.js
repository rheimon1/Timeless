import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <nav className="menu">
    <ul>
      <li>
        <Link to="following">
          <i className="fas fa-user-friends" aria-hidden="true"></i>
        </Link>
        <p>Following</p>
      </li>
      <li>
        <Link to="messages">
          <i className="fas fa-comment-alt" aria-hidden="true"></i>
        </Link>
        <p>Messages</p>
      </li>
      <li>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo Timeless" />
        </Link>
      </li>
      <li>
        <Link to="profile">
          <i className="fas fa-user" aria-hidden="true"></i>
        </Link>
        <p>Profile</p>
      </li>
      <li>
        <Link to="settings">
          <i className="fas fa-cog" aria-hidden="true"></i>
        </Link>
        <p>Settings</p>
      </li>
    </ul>
  </nav>
);

export default Menu;
