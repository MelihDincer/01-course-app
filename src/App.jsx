import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import CoursesPage from "./pages/Courses";
import HomePage from "./pages/Home";
import MainLayout from "./Layout/MainLayout";
import AboutPage from "./pages/About";

// const routers_1 = (
//   <Route>
//     <Route path="/" element={<HomePage />} />,
//     <Route path="/home" element={<HomePage />} />,
//     <Route path="/about" element={<About />} />,
//     <Route path="/courses" element={<Courses />} />
//   </Route>
// );
// const router_1 = createRoutesFromElements(routers_1);

// const routers = [
//   { path: "/", element: <HomePage /> },
//   { path: "/home", element: <HomePage /> },
//   { path: "/about", element: <About /> },
//   { path: "/courses", element: <Courses /> },
// ];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <RouterProvider router={router} />
    </>
  );
}
