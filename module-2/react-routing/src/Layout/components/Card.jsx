export function Card({ children, bgColor = "blue", title = "card" }) {
    return (
        <div style={{ backgroundColor: bgColor }} className="h-50">
            <h2 className="text-4xl font-bold">{title}</h2>
            {children}
        </div>
    );
}

export default Card;
