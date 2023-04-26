import { TextField } from "./Components/Auth/TextField";
const handleChange = () => {};
const handleBlur = () => {};
export const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container m-4 p-12 w-500 text-center rounded-md shadow-lg max-w-3xl mx-auto bg-white ">
                <img
                    src="https://placehold.jp/300x300.png"
                    alt=""
                    className="block mx-auto mb-3 text-center w-24"
                />
                <h1 className="mb-8 text-3xl font-bold text-gray-700">
                    ログイン
                </h1>
                <form>
                    <TextField
                        title={"名前"}
                        name={"userName"}
                        placeholder={"名前を入力してください"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <div className="mb-3">
                        <button className="w-full p-3 border border-gray-200 rounded-md shadow-md bg-indigo-500 disabled:opacity-50 focus:outline-none">
                            入室する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
