import { useRoutes } from "react-router-dom";
import { routerData } from "./config";

const Router = () => {
  return useRoutes(routerData);
};

export default Router;
