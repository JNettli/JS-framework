import App from "../App";
import { Header, Footer } from "./Components";

function Layout() {
    return (
        <>
            <Header />
            <App />
            <div className="text-xl">
                <p>Wow that's nice</p>
            </div>
            <Footer />
        </>
    );
}

export { Layout };
