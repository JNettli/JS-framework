import { Home } from "./Home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Outlet } from "react-router-dom";
import { Pokemon } from "./Pokemon";

function Layout() {
    return (
        <>
            <Header />
            <main className="bg-slate-900 h-full pb-8">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export { Layout, Home, Pokemon };
