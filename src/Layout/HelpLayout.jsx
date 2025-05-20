import { Link, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help Layout</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        asperiores perspiciatis corporis, doloribus dolorum aperiam facilis
        error obcaecati assumenda quas commodi veniam inventore. Quam inventore
        nisi sint voluptates delectus iure.HELPHELPHELPHELPHELPHELP
      </p>
      <nav>
        <Link to="contact">Contact</Link>
        <Link to="faq">FAQ</Link>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link> */}
      </nav>
      <Outlet /> {/*Child elementler için */}
    </div>
  );
}
