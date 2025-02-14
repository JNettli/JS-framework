import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Hello World</div>
            <div>
                <h2>Charlizard</h2>
                <p>Wawaweewa</p>
            </div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Clik count: {count}
            </button>
        </>
    );
}

export default App;
