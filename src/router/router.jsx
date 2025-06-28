import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
      {
        index:true,
        Component:Hero,
      }
    ]
  },
]);
export default router;
