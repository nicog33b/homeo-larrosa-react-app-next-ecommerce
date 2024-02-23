import React from "react";

const InfoCard = ({ title }) => {
    return (
        <div className="max-w-m mx-auto rounded-md p-4 shadow-md text-center  bg-emerald-100">
            <div className="w-full h-40 flex items-center justify-center rounded ">
                <p className="flex text-lg font-serif text-gray-800" >{title}</p>
            </div>
        </div>
    );
};
export default InfoCard;
