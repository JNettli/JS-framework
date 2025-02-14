import { useParams } from "react-router-dom";

export function SpesificProfile() {
    const params = useParams();
    console.log(params);

    return <p>Your name here: {params.name}</p>;
}
