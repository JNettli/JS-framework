import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="flex bg-amber-600 text-white text-xl mb-4">
            <Link
                to="/"
                className="bg-slate-800 rounded text-white m-2 p-2 cursor-pointer"
            >
                Home Page
            </Link>
            <Link
                to="/about"
                className="bg-slate-800 rounded text-white m-2 p-2 cursor-pointer"
            >
                About Page
            </Link>
            <Link
                to="/rizz"
                className="bg-slate-800 rounded text-white m-2 p-2 cursor-pointer"
            >
                Cool Page
            </Link>
            <Link
                to="/skibidi"
                className="bg-slate-800 rounded text-white m-2 p-2 cursor-pointer"
            >
                Toilet
            </Link>
        </header>
    );
}

export default Header;
