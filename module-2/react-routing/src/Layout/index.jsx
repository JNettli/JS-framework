import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export { Layout };
