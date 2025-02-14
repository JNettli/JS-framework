import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <header className="bg-indigo-800 pb-4">
                <nav>
                    <h1 className="text-7xl font-bold text-white mb-4">
                        Pokédex
                    </h1>
                    <div className="flex gap-4">
                        <Link
                            to="/"
                            className="text-white text-2xl p-2 rounded bg-amber-600 hover:bg-amber-800 transition duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-white text-2xl p-2 rounded bg-amber-600 hover:bg-amber-800 transition duration-200"
                        >
                            About
                        </Link>
                        <Link
                            to="/card"
                            className="text-white text-2xl p-2 rounded bg-amber-600 hover:bg-amber-800 transition duration-200"
                        >
                            Card
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}
