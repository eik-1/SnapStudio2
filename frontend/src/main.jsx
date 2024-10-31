import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { UserProvider } from "./contexts/UserContext.jsx"
<<<<<<< HEAD
import { Toaster } from "./components/ui/toaster"
=======
import { Toaster } from "@/Components/UI/toaster"
>>>>>>> b1bd88735d7578335f83c9ab48f48564eb6f5e5d

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserProvider>
            <App />
            <Toaster />
        </UserProvider>
    </StrictMode>,
)
