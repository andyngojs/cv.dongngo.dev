import {memo} from 'react';
import appConfig from '../../app/config';
import {NavBarList} from './nav-bar-list';

const _NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top padding-navbar"
      id="sideNav">
      <a className="navbar-brand">
        <span className="d-block d-lg-none">
          {appConfig.personalInfo.fullName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2 img-zoomable"
            src={appConfig.avatar}
            alt="avatar-cv-dongngo"
            title="Click to zoom image."
          />
        </span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarScroll">
        <NavBarList />
      </div>
    </nav>
  );
};

export const NavBar = memo(_NavBar);
