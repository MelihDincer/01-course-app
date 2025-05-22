import { createBrowserRouter, RouterProvider } from "react-router";
import CoursesPage from "./pages/course/Courses";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/About";
import ContactPage from "./pages/help/Contact";
import FaqPage from "./pages/help/Faq";
import HelpLayout from "./layouts/HelpLayout";
import { coursesLoader } from "./pages/course/Courses";
import CourseDetailsPage, {
  courseDetailsLoader,
} from "./pages/course/CourseDetails";
import CourseLayout from "./layouts/CourseLayout";
import CourseCreatePage from "./pages/course/CourseCreate";
import CourseEditPage from "./pages/course/CourseEdit";

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

      {
        path: "courses",
        element: <CourseLayout />,
        children: [
          { index: true, element: <CoursesPage />, loader: coursesLoader },

          {
            id: "course-details",
            path: ":courseid",
            loader: courseDetailsLoader,
            children: [
              {
                index: true,
                element: <CourseDetailsPage />,
              },
              {
                path: "edit",
                element: <CourseEditPage />,
              },
            ],
          },

          {
            path: "create",
            element: <CourseCreatePage />,
          },
        ],
      },

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
