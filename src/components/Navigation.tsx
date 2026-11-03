import { NavLink } from "react-router";

function toggleLightDarkMode() {
  const isLight =
    window.document.documentElement.classList.toggle("theme-light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

function Navigation() {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Blogs
        </NavLink>
        <button
          className="toggle-button"
          onClick={toggleLightDarkMode}
          type="button"
        >
          Dark/Light Mode
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
