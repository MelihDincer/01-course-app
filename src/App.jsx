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
import ContactPage from "./pages/help/ContactPage";
import FaqPage from "./pages/help/FaqPage";
import HelpLayout from "./Layout/HelpLayout";
import { coursesLoader } from "./pages/Courses";

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
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage />, loader: coursesLoader },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          // { index: true, element: <ContactPage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
