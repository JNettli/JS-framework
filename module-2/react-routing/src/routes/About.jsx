import { Outlet } from "react-router-dom";
import Card from "../Layout/components/Card";

function About() {
    return (
        <>
            <div className="text-7xl">
                <h1>Aboooooot Page</h1>
                <p className="mb-4">🫡🫡🫡🫡🫡</p>
            </div>
            <Outlet />
            <Card bgColor={"green"} title={"My Card"}>
                <p>Content of this shiz</p>
            </Card>
        </>
    );
}

export default About;
