import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import About from "./pages/About";
import Courses from "./pages/Courses";
import HomePage from "./pages/Home";

const routers_1 = (
  <Route>
    <Route path="/" element={<HomePage />} />,
    <Route path="/home" element={<HomePage />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/courses" element={<Courses />} />
  </Route>
);
const router_1 = createRoutesFromElements(routers_1);

const routers = [
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/courses", element: <Courses /> },
];

const router = createBrowserRouter(router_1);

export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <RouterProvider router={router} />
    </>
  );
}
