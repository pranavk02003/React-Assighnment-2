import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="container mx-auto flex gap-6 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline font-bold" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "underline font-bold" : ""}>
          About
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? "underline font-bold" : ""}>
          Users
        </NavLink>
      </nav>
    </header>
  );
}
