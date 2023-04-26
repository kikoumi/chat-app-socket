import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <nav className="w-full text-gray-600 header-nav">
                <div className="flex justify-between bg-gray-50 mx-auto h-full items-center">
                    <Link className="flex items-center text-gray-900" to="/">
                        <img
                            src="https://placehold.jp/300x300.png"
                            alt=""
                            className="h-14 w-14 p-2 "
                        />
                        <h2 className="text-xl font-bold">Chat-app</h2>
                    </Link>
                    <button className="px-6 py-3 text-white border border-gray-200 rounded-md shadow-md bg-indigo-700 disabled:opacity-50 focus:outline-none">
                        ログアウト
                    </button>
                </div>
            </nav>
        </>
    );
};
