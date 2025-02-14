import Card from "../Layout/components/Card";

const Toilet = () => {
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WePNs-G7puA?autoplay=1"
                title=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

function Skibidi() {
    return (
        <>
            <div className="text-[6rem]">
                <p className="mb-4">🚽🚽🚽🚽🚽</p>
            </div>
            <Card bgColor={"magenta"} title={"Toiletry"}>
                <p>Skibidi yap yap yap yes yes yes</p>
            </Card>
            <Toilet />
        </>
    );
}

export default Skibidi;
