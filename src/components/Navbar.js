import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrollednav" : ""}`}>
      <div className="container">
        <div className="Left">
          <img src="/logo.png" alt="MaRS Logo" className="logo" />
          <h1>MaRS</h1>
        </div>
        <div className="Right">
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li className="item">
              <a href="/" className="c">Home</a>
            </li>
            <li className="item">
              <a href="/Projects" className="c">
                Projects
              </a>
            </li>
            <li className="item">
              <a href="/Gallery" className="c">Gallery</a>
            </li>
            <li className="item">
              <a href="/Teams" className="c">Teams</a>
            </li>
            <li className="item">
              <a href="/achievements" className="c">Achievements</a>
            </li>
            {/* <li className="item">
              <div className="search-box">Blogs</div>
            </li>*/}
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;