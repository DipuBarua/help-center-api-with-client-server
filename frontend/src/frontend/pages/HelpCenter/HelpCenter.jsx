import { Helmet } from "react-helmet-async";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const HelpCenter = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://backend-plum-mu.vercel.app/cards`)
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })
    }, []);

    console.log("cards:", cards);

    return (
        <div>
            <Helmet>
                <title>Abstract | Help Center</title>
            </Helmet>

            <div className=" grid md:grid-cols-2 gap-10 mx-20 my-10">
                {
                    cards.map(item => <Card
                        key={item._id}
                        item={item}
                    ></Card>)
                }
            </div>


        </div>
    );
};

export default HelpCenter;
