import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./Pages/RootLayout"
import LandingPage from "./Pages/LandingPage"
import Home from "./Pages/Home"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,

        },
        {
            path: "/home",
            element: <RootLayout />,
            children: [
                {
                    index:true,
                    element: <Home />,
                }
            ]
        },
    ])

    
        return (
            <RouterProvider router={router}>
                {router}
            </RouterProvider>
        );
    }

export default App;


