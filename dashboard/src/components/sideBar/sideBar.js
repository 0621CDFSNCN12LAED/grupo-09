import React from "react";
import logo from "../../assets/images/appedal-logo.svg";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logo} alt="logo-appedal" />
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Admin</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Accesos</div>

      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <i className="fas fa-fw fa-folder"></i>
          <span>Archivos</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Graficos</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-table"></i>
          <span>Tablas</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;

