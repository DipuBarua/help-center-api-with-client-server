import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className=" bg-violet-100 py-24">
            <h2 className=" text-6xl font-medium text-black text-center">How can we help?</h2>
            <div className=" flex justify-center my-10">
                <input type="text" placeholder="Search" className="input input-bordered border-2 border-black rounded-none w-1/2 " />

                <button className=" relative z-10 right-7 flex items-center">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Banner;