import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState("/my-account");

    const menuItems = [
        { path: "/my-account", label: "My Account" },
        { path: "/edit-profile", label: "Profile" },
        { path: "/ads", label: "Ads" },
        { path: "/post-ad", label: "Post Ad" },
        { path: "/logout", label: "Logout" },
    ];

    return (
        <aside
            className="w-1/4 h-[70%] bg-white rounded-lg overflow-y-auto"
            style={{
                minHeight: "70vh",
                boxShadow:
                    "rgb(147 184 209 / 30%) 0px 1px 2px 0px, rgb(133 133 133 / 15%) 0px 2px 6px 2px",
            }}
        >
            <ul className="space-y-6 py-6 px-10">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            onClick={() => setActiveLink(item.path)}
                            className={`block transition-all px-4 py-2 text-lg ${activeLink === item.path
                                ? "text-lg bg-black w-[100%] text-white px-4 py-3 rounded-full inline-block transition"
                                : " hover:text-black"
                                } 
                            ${item.label === "Post Ad" ? "text-[#F50963]" : "text-gray-700"}
                            `}
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
