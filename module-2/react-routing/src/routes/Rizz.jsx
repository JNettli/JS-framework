import { Outlet } from "react-router-dom";
import Card from "../Layout/components/Card";

function Rizz() {
    return (
        <>
            <div className="text-[6rem]">
                <p className="mb-4">🫃🫃🫃🫃🫃🫃</p>
            </div>
            <Outlet />
            <Card bgColor={"cyan"} title={"My Card"}>
                <p>We are preggers. We are legion.</p>
            </Card>
        </>
    );
}

export default Rizz;
