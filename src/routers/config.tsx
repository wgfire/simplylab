import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Loading } from "../components/loading";
const Home = lazy(() => import("../page/home"));

const Search = lazy(() => import("../page/search"));

export const routerData: RouteObject[] = [
  {
    path: "/home",
    element: (
      <Suspense fallback={<Loading open={true}></Loading>}>
        <Home></Home>
      </Suspense>
    ),
  },
  {
    path: "/search/:keyword",
    element: (
      <Suspense fallback={<Loading open={true}></Loading>}>
        <Search></Search>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/home"></Navigate>,
  },
];
