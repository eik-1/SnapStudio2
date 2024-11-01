import React from "react"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import RootLayout from "./Pages/RootLayout"
import LandingPage from "./Pages/LandingPage"
import Home from "./Pages/Home"
import Login from "./Components/Login"
import { useUser } from "./contexts/UserContext"
import { ImageProvider } from "./contexts/ImageContext"
import SavedImageCollection from "./Pages/SavedImageCollection"

function ProtectedRoute({ children }) {
    const { user, loading } = useUser()

    if (loading) return
    console.log(user)
    if (!user) return <Navigate to="/" replace />

    return children
}

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/home",
            element: (
                <ProtectedRoute>
                    <ImageProvider>

                        <RootLayout />
                    </ImageProvider>
                </ProtectedRoute>
            ),
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path:"/home/mycollection",
                    element:<SavedImageCollection/>
                }
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ])

    return <RouterProvider router={router} />
}

export default App
