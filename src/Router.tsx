import {createBrowserRouter} from "react-router-dom";
import Entrance from "./pages/Entrance";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/hombrewtify.com",
    element: <Entrance />
  },
  {
    path: "/open.hombrewtify.com", 
    element: <Home />
  }
])

export default router;