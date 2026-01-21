import Main from "../pages/Main/Main.jsx";
import About from "../pages/About/About.jsx";
import Hotels from "../pages/Hotels/Hotels.jsx";

export const routes = {
  main: {
    element: <Main />,
    path: "/",
    id: 1,
  },
  about: {
    element: <About />,
    path: "/about",
    id: 2,
  },
  hotels: {
    element: <Hotels />,
    path: "/hotels",
    id: 3,
  },
};
