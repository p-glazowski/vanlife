import { NavLink, Link } from "react-router";
import user from "/user.svg";

export default function Header() {
  return (
    <header className="bg-my-beige flex flex-row items-center justify-between p-4 px-6">
      <div className="text-2xl font-bold">
        <Link to="/">#VANLIFE</Link>
      </div>
      <nav>
        <ul className="flex flex-row items-center gap-5">
          <li>
            <NavLink
              to="host"
              className={({ isActive }) =>
                `hover:underline hover:opacity-70 active:font-bold ${isActive ? "font-bold" : ""}`
              }
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `hover:underline hover:opacity-70 active:font-bold ${isActive ? "font-bold" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="vans"
              className={({ isActive }) =>
                `hover:underline hover:opacity-70 active:font-bold ${isActive ? "font-bold" : ""}`
              }
            >
              Vans
            </NavLink>
          </li>
          <li>
            <Link to="login">
              <div className="w-5">
                <img src={user} alt="user logo" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
