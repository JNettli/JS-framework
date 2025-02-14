const root = document.querySelector("#root");

function useState(initVal) {
    let value = initVal;
    function setValue(newVal) {
        value = newVal;
    }
    function getValue() {
        return value;
    }
    return [getValue, setValue];
}

const [getCount, setCount] = useState(0);

function App() {
    const app = document.createElement("div");
    app.textContent = "Pokermen cerds.";

    app.appendChild(Card());
    app.appendChild(Button());
    return app;
}

function Card() {
    const card = document.createElement("div");
    const cardH2 = document.createElement("h2");
    const cardP = document.createElement("p");

    cardH2.textContent = "Charlizard";
    cardP.textContent = "Does a roar";
    card.append(cardH2, cardP);

    return card;
}

function Button() {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
        setCount(getCount() + 1);
        console.log("button was clicked. Count:", getCount());
        render();
    });

    button.textContent = "roar nr: " + getCount();

    return button;
}

function render() {
    root.innerHTML = "";
    root.appendChild(App());
}

render();
