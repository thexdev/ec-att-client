import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Welcome from './features/welcome'
import React from "react";
import Layout from "./shared/components/layout";
import PerformAbcense from "./features/perform-absence";
import Success from "./features/success";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,element: <Welcome /> },
      { path: 'absensi', element: <PerformAbcense /> },
      { path: 'berhasil', element: <Success /> }
    ]
  }
])

function App() {
  return <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
}

export default App;