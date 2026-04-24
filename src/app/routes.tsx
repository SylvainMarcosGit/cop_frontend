import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Charte = lazy(() => import("./pages/Charte").then((m) => ({ default: m.Charte })));
const Discussions = lazy(() => import("./pages/Discussions").then((m) => ({ default: m.Discussions })));
const Resources = lazy(() => import("./pages/Resources").then((m) => ({ default: m.Resources })));
const Members = lazy(() => import("./pages/Members").then((m) => ({ default: m.Members })));
const Profile = lazy(() => import("./pages/Profile").then((m) => ({ default: m.Profile })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: () => <Suspense fallback={<PageLoader />}><Home /></Suspense> },
      { path: "about", Component: () => <Suspense fallback={<PageLoader />}><About /></Suspense> },
      { path: "charte", Component: () => <Suspense fallback={<PageLoader />}><Charte /></Suspense> },
      { path: "discussions", Component: () => <Suspense fallback={<PageLoader />}><Discussions /></Suspense> },
      { path: "resources", Component: () => <Suspense fallback={<PageLoader />}><Resources /></Suspense> },
      { path: "members", Component: () => <Suspense fallback={<PageLoader />}><Members /></Suspense> },
      { path: "profile", Component: () => <Suspense fallback={<PageLoader />}><Profile /></Suspense> },
      { path: "*", Component: () => <Suspense fallback={<PageLoader />}><NotFound /></Suspense> },
    ],
  },
]);
