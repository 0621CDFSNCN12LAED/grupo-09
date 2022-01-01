import defaultProfilePic from "../../../assets/images/toonjh.png";

export default function TopNavBar(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
            <i className="fas fa-bell fa-fw"></i>
          </a>
        </li>

        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="messagesDropdown"
          >
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter">1</span>
          </a>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Local Admin
            </span>
            <img
              className="img-profile rounded-circle"
              src={defaultProfilePic}
              alt="soy YO!"
              width="60"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
