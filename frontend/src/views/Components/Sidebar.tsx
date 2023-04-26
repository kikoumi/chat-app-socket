import { useSelector } from "react-redux";
import React from "react";

export const Sidebar: React.FC = () => {
    return (
        <div className="flex-none bg-indigo-700 overflow-y-auto flex-grow w-64">
            <div className="flex flex-col h-full ">
                <div className="items-center my-2 mt-5 font-bold text-white text-center">
                    LoginUser
                </div>
                {new Array().map(() => (
                    <>
                        <div className="flex items-center my-2 mx-2 border border-transparent  rounded-md bg-indigo-800 h-16">
                            <span className="h-2 w-2 mx-4 rounded-full bg-emerald-500 ring ring-white"></span>
                            <div
                                className="text-white font-bold"
                                key={``}
                            ></div>
                        </div>
                    </>
                ))}
                <div className="mt-auto">
                    <div className="text-center">
                        <span className="items-center my-2 mt-5 font-bold text-white">
                            MyUser Info
                        </span>
                    </div>
                    <div className="flex items-center my-2 mx-2 border border-transparent rounded-md bg-indigo-800 h-16">
                        <span className="h-2 w-2 mx-4 rounded-full bg-emerald-500 ring ring-white"></span>
                        <div className="text-white font-bold"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
