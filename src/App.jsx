import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import Product, { loader as sLoader } from "./contents/Pages/Product";

import "./server";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Watches from "./contents/Pages/Watches";
const Glasses = lazy(() => import("./contents/Pages/Glasses"));
const Layout = lazy(() => import("./contents/Layout"));
const Home = lazy(() => import("./contents/Pages/Home"));
const CartContainer = lazy(() => import("./contents/Pages/CartContainer"));
const Categories = lazy(() => import("./contents/Pages/Categories"));
const Finder = lazy(() => import("./contents/Pages/Finder"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          }
        >
          <Layout />
        </Suspense>
      ),
      errorElement: <>{"somethomg Went wrong plz reload again"}</>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/glasses",
          element: <Glasses />,
        },
        {
          path: "/watches",
          element: <Watches />,
        },
        {
          path: "/:id",

          element: (
            <Suspense
              fallback={
                <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                </div>
              }
            >
              <Product />
            </Suspense>
          ),
          loader: ({ params }) => sLoader(params.id),
        },
        {
          path: "/cart",
          element: (
            <Suspense
              fallback={
                <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                </div>
              }
            >
              <CartContainer />
            </Suspense>
          ),
        },
        {
          path: "/categories",
          element: (
            <Suspense
              fallback={
                <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                </div>
              }
            >
              <Categories />
            </Suspense>
          ),
        },
      ],
    },

    {
      path: "/search",
      element: (
        <Suspense
          fallback={
            <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          }
        >
          <Finder />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
