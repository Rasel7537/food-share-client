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
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        loader: () => fetch("https://food-share-server-seven.vercel.app/foods"),
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
        loader: () => fetch("https://food-share-server-seven.vercel.app/foods"),
        Component: AvailableFood,
      },
      {
        path: "manageFoods",
        loader: () => fetch("https://food-share-server-seven.vercel.app/foods"),
        element: (
          <PrivateRoute>
            <ManageFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "UpdateFood/:id",
        loader: ({ params }) =>
          // fetch(`https://food-share-server-seven.vercel.app/${params.id}`),
         fetch(`https://food-share-server-seven.vercel.app/foods/${params.id}`),
        Component: UpdateFood,
      },
      {
        path: "foodDetails/:id",
        loader: () => fetch("https://food-share-server-seven.vercel.app/foods"),
        Component: FoodDetails,
      },
      {
        path: "myFoodRequests/:email",
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
