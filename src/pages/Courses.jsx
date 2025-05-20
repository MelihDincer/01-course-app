import { NavLink } from "react-router";

export default function CoursesPage() {
  return (
    <>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/courses">Courses</NavLink>
      </nav>
      <div>
        <h1>Courses</h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          commodi, laboriosam sit doloribus nemo quia quo rem quas sunt
          molestiae repellendus vero, ipsum tempore inventore nam optio
          exercitationem earum quasi?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur harum illum minus fugiat sit modi id
          repellendus laboriosam blanditiis sequi similique ipsam suscipit
          provident, corporis nulla praesentium mollitia facere explicabo.
          Repellat fuga ad ea perferendis, nesciunt, sint corporis quaerat,
          blanditiis omnis a odio dolore delectus? Aspernatur placeat corporis
          doloremque delectus vitae aliquid distinctio natus blanditiis, sequi
          quia consequuntur rerum eaque! Dolore nostrum sed ad facere repellat
          explicabo beatae similique aperiam non, perspiciatis ab rerum, quidem
          debitis sunt magni consectetur excepturi illo. At nisi officia aliquid
          dolor consectetur nulla asperiores porro.
        </p>
      </div>
    </>
  );
}
