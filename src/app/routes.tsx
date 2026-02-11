import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { Resources } from "./pages/Resources";
import { Members } from "./pages/Members";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "events", Component: Events },
      { path: "resources", Component: Resources },
      { path: "members", Component: Members },
      { path: "profile", Component: Profile },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
