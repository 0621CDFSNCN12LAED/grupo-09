import defaultProfilePic from "../../../assets/images/toonjh.png";

export default function TopNavBar(props) {
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        class="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i class="fa fa-bars"></i>
      </button>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown no-arrow mx-1">
          <a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
            <i class="fas fa-bell fa-fw"></i>
            <span class="badge badge-danger badge-counter">3+</span>
          </a>
        </li>

        <li class="nav-item dropdown no-arrow mx-1">
          <a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
            <i class="fas fa-envelope fa-fw"></i>
            <span class="badge badge-danger badge-counter">7</span>
          </a>
        </li>

        <div class="topbar-divider d-none d-sm-block"></div>

        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">
              Local Admin
            </span>
            <img
              class="img-profile rounded-circle"
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