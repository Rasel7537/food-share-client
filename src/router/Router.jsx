
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/addFood/AddFood";
import FeaturedFoods from "../pages/featuredFoods/FeaturedFoods";
import ManageFoods from "../pages/manageFoods/ManageFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import UpdateFood from "../pages/updateFood/UpdateFood";
import AvailableFood from "../pages/availableFood/AvailableFood";
import MyFoodRequests from "../pages/myFoodRequests/MyFoodRequests";
import PrivateRoute from "../provider/PrivateRoute";
import Errorpage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Errorpage></Errorpage> ,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/foods"),
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "addFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "featuredFoods",
        Component: FeaturedFoods,
      },
      {
        path: "availableFoods",
        loader: () => fetch("http://localhost:3000/foods"),
        Component: AvailableFood,
      },
      {
        path: "manageFoods",
        loader: () => fetch("http://localhost:3000/foods"),
        element: (
          <PrivateRoute>
            <ManageFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "UpdateFood/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
        Component: UpdateFood,
      },
      {
        path: "foodDetails/:id",
        loader: () => fetch("http://localhost:3000/foods"),
        Component: FoodDetails,
      },
      {
        path: "myFoodRequests/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
        element: (
          <PrivateRoute>
            <MyFoodRequests />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

