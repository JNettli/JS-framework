import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Home, Pokemon } from "./routes/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/pokemon/:name",
                element: <Pokemon />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />;
        </>
    );
}

export default App;
