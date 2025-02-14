import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About.jsx";
import Rizz from "./routes/Rizz.jsx";
import Skibidi from "./routes/Skibidi.jsx";
import { Layout } from "./Layout/index.jsx";
import { SpesificProfile } from "./routes/SpesificProfile.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "JoshuaGraham",
                        element: <About />,
                        children: [
                            { path: ":name", element: <SpesificProfile /> },
                        ],
                    },
                ],
            },
            {
                path: "JoshuaGraham",
                element: <About />,
                children: [{ path: ":name", element: <SpesificProfile /> }],
            },
            {
                path: "/rizz",
                element: <Rizz />,
            },
            {
                path: "/skibidi",
                element: <Skibidi />,
            },
        ],
    },
]);
RouterProvider();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
