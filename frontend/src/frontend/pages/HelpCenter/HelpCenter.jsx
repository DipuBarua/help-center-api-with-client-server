import { Helmet } from "react-helmet-async";
import Card from "../Card/Card";

const HelpCenter = () => {
    return (
        <div>
            <Helmet>
                <title>Abstract | Help Center</title>
            </Helmet>

            <h2 className=" text-2xl">Explore Help Center!</h2>
            <Card></Card>


        </div>
    );
};

export default HelpCenter;
