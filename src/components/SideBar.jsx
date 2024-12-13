import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setActiveLink(location.pathname);
        setIsMenuOpen(false);
    }, [location]);

    const menuItems = [
        { path: "/my-account", label: "My Account" },
        { path: "/edit-profile", label: "Profile" },
        { path: "/ads", label: "Ads" },
        { path: "/add-post", label: "Post Ad" },
        { path: "/logout", label: "Logout" },
    ];

    return (
        <aside
            className="lg:w-1/4 bg-white rounded-lg overflow-y-auto lg:block min-h-auto lg:min-h-[60vh]"
            style={{
                boxShadow:
                    "rgb(147 184 209 / 30%) 0px 1px 2px 0px, rgb(133 133 133 / 15%) 0px 2px 6px 2px",
            }}
        >
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex justify-end p-4">
                <button
                    className="text-gray-500 text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <ul
                className={`space-y-6 py-6 px-10 transition-all ${isMenuOpen || window.innerWidth >= 1024 ? "block" : "hidden"
                    }`}
            >
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`block transition-all px-4 py-3 text-lg ${activeLink === item.path
                                ? "bg-black w-full text-white rounded-full"
                                : "hover:text-black"
                                }
              ${item.label === "Post Ad" ? "text-[#F50963]" : "text-gray-700"}`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
