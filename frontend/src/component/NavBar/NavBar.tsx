import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../redux/thunks/auth-thunks";
import "./NavBar.css";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { Perfume } from "../../types/types";

const NavBar: FC = () => {
  const dispatch = useDispatch();
  const perfumes: Array<Perfume> = useSelector(
    (state: AppStateType) => state.cart.perfumes
  );
  const isLoggedIn: boolean = useSelector(
    (state: AppStateType) => state.user.isLoggedIn
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  let links;
  let signOut;

  if (localStorage.getItem("isLoggedIn") || isLoggedIn) {
    links = (
      <li className="nav-item">
        <Link to={"/account"}>
          <span className="nav-link ">
            <FontAwesomeIcon className="mr-1" icon={faUser} />
            My Account
          </span>
        </Link>
      </li>
    );
    signOut = (
      <Link to={"/"} onClick={handleLogout}>
        <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />
        Exit
      </Link>
    );
  } else {
    links = (
      <>
        <li className="nav-item">
          <Link to={"/login"} className="nav-link pl-3 pr-3">
            <FontAwesomeIcon className="mr-2" icon={faSignInAlt} />
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/registration"} className="nav-link">
            <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
            Sign Up
          </Link>
        </li>
      </>
    );
    signOut = null;
  }

  return (
    <div>
      <div className="container-fluid bg-white" style={{ maxWidth: "1300px" }}>
        <nav
          id="navbar-main"
          className={`container navbar navbar-expand-lg bg-black text-white `}
          style={{ fontSize: "14px" }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="logo-nav-item">
              <a href="/">
                <img
                  src="https://templatekit.jegtheme.com/cologne/wp-content/uploads/sites/180/2021/10/cologne.png"
                  className="rounded mx-auto d-block headerLogo"
                />
              </a>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"}>
                  <span className="nav-link pl-3 pr-3">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={{ pathname: "/menu", state: { id: "all" } }}>
                  <span className="nav-link pl-3 pr-3">Perfume</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contacts"}>
                  <span className="nav-link pl-3 pr-3">Contact Us</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/about"}>
                  <span className="nav-link pl-3 pr-3">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/cart"}>
                  <i className="fas fa-shopping-cart fa-lg pl-3"></i>
                  <h5
                    className="d-inline"
                    style={{
                      position: "relative",
                      right: "15px",
                      bottom: "8px",
                    }}
                  >
                    <span className="badge badge-success">
                      {perfumes.length}
                    </span>
                  </h5>
                </Link>
              </li>
              {links}
            </ul>
            {signOut}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
