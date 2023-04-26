import React, { FormEvent, useState } from "react";

export const ChatArea: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col overflow-y-auto w-full">
            <div className="flex-1 overflow-y-auto bg-gray-100">
                <div className="bg-gray-100 px-4 py-2">
                    <div className="rounded-lg p-4 mb-4">
                        {new Array().map(() => (
                            <div
                                className="rounded-lg bg-white p-4 mb-4"
                                key={``}
                            >
                                <div className="flex items-center mb-2">
                                    <div className="text-gray-800 font-bold mr-4"></div>
                                    <div className="text-gray-600"></div>
                                </div>
                                <div className="text-gray-600"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 px-4 py-2">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="flex-1 bg-white border border-gray-400 rounded-lg px-4 py-2 mr-2"
                            placeholder="メッセージを入力してください"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                        >
                            送信
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
