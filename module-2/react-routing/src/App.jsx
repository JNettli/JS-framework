import "./App.css";
import Card from "./Layout/components/Card";

function App() {
    return (
        <>
            <div className="text-7xl">
                <h1>Home Page</h1>
                <p className="mb-4">🤔</p>
            </div>
            <Card bgColor={"red"} title={"My Card"}>
                <p>Content of this shiz</p>
            </Card>
        </>
    );
}

export default App;
