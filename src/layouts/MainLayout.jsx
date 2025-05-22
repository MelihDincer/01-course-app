import { NavLink, Outlet, useNavigation } from "react-router";

export default function MainLayout() {
  const navigation = useNavigation();

  return (
    <div id="main-layout">
      <header className="container">
        <h1>Course App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="courses">Courses</NavLink>
          <NavLink to="help">Help</NavLink>
          {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link> */}
        </nav>
      </header>
      <main className="container">
        {navigation.state == "loading" && (
          <span>
            <i className="fa-solid fa-spinner"></i>Loading...
          </span>
        )}
        <Outlet />
      </main>
    </div>
  );
}
