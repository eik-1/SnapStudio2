import React from "react"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import RootLayout from "./Pages/RootLayout"
import LandingPage from "./Pages/LandingPage"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import { useUser } from "./contexts/UserContext"

function ProtectedRoute({ children }) {
    const { user, loading } = useUser()

    if (loading) return
    if (!user) return <Navigate to="/login" replace />

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
                    <RootLayout />
                </ProtectedRoute>
            ),
            children: [
                {
                    index: true,
                    element: <Home />,
                },
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
