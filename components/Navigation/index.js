import React, { useRef } from "react";

export const Navigation = (props) => {
  const { openSearch } = props;

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top bar">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          {" "}
          <span className="sr-only">Toggle navigation</span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
        </button>
        <img src="/images/ngmusic.svg" className="logo" alt="logo-navbar" />
        <div className="search-wrap" onClick={() => openSearch()}>
          <img src="/images/search.svg" alt="search" />
        </div>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li>
            <div className="page-button">
              REGISTER
            </div>
          </li>
          <li>
            <div className="page-button">
              LOGIN
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
