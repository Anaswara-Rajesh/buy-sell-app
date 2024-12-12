import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);
    const pathNames = {
        "my-account": "My Profile",
        "profile": "Profile",
        "ads": "Ads",
        "ad-post": "Post Ad",
    };

    return (
        <nav className="">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 font-semibold flex items-center space-x-3">
                    Home
                    <img className="h-3 ml-4" src="/assets/arrow2.svg" />
                    <span>
                        {paths.map((path, idx) => (
                            <span key={idx}>
                                {pathNames[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')}
                                {idx < paths.length - 1 && " > "}
                            </span>
                        ))}
                    </span>
                </p>
            </div>
        </nav>
    );
};

export default Breadcrumb;
