import { MainLayout } from "./layout/MainLayout";
import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Home = lazy(() => import("./pages/HomePage"))




export const Router = () => useRoutes([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
])