import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div>Header</div>
        <div>
          <Link to="/">HomePageだよ</Link>
        </div>
        <div>
          <Link to="/blog">Blogだよ</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
