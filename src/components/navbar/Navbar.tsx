import { useState } from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user: boolean = true;

  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/img/logo-no-background.png" alt="logo" />
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/25677518?v=4"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign up</a>
            <a href="/" className="register">
              Sign in
            </a>
          </>
        )}
        <div className="menuicon">
          <img
            src="/img/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
