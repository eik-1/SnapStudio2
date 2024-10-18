import { Link } from "react-router-dom"
import { Wand, BookImage, Binoculars, Settings } from "lucide-react"
function NavBar() {
    const navData = [
        {
            /*Add to:"" property for the 
            <Link /> element */
            item: "Create",
            icon: <Wand size={24} />,
        },
        {
            item: "My collection",
            icon: <BookImage size={24} />,
        },
        {
            item: "Explore",
            icon: <Binoculars size={24} />,
        },
        {
            item: "Settings",
            icon: <Settings size={24} />,
        },
    ]

    return (
        <nav className="flex flex-col items-center w-16 h-screen py-8 bg-white border-r">
            <ul className="flex flex-col items-center space-y-8 list-none">
                {navData.map((item, index) => {
                    return (
                        <li className="p-1.5 text-gray-500 " key={index}>
                            <Link to="#">{item.icon}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default NavBar
