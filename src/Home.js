import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function gotoAbout() {
    navigate("/about");
  }
  return (
    <>
      <div>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Page</NavLink>
        </li>
      </div>
      <button onClick={() => gotoAbout()}>go to about page</button>
      <Outlet />
    </>
  );
}

export default Home;
