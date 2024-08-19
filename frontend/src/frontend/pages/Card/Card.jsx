
const Card = ({ item }) => {
    return (
        <div className="card bg-slate-100  shadow-xl -z-20">
            <div className="card-body divide-y-2">
                <h2 className="card-title">{item.title}</h2>

                <p>{item.description}</p>

            </div>
        </div>
    );
};

export default Card;