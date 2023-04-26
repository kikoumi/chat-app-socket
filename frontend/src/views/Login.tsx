import { useState } from "react";
import { TextField } from "./Components/Auth/TextField";
import { validateNameField } from "../feature/auth/validation";
import { useDispatch } from "react-redux";
import { login } from "../feature/auth/authSlice";

interface FormField {
    userName: string;
}

interface FormErrors {
    userName?: string;
}

/**
 * 初期状態
 */
const initialState = {
    userName: "",
};

export const Login = () => {
    const [formField, setFormField] = useState<FormField>(initialState);
    const [formError, setFormError] = useState<FormErrors>({});

    const dispatch = useDispatch();

    /**
     * バリデーションチェック
     * @param name
     * @param value
     */
    const validate = (name: string, value: string) => {
        if (name === "userName") {
            setFormError({
                ...formError,
                [name]: validateNameField(value),
            });
        }
    };

    /**
     * 入室ボタン非活性フラグ
     * @returns
     */
    const isLoginButtonDisabled = () => {
        if (!formField.userName) {
            return true;
        }

        if (!!formError.userName) {
            return true;
        }

        return false;
    };

    /**
     * テキストの入力検知
     * @param event ChangeEvent
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    };

    /**
     * フォーカスアウト時
     * @param event
     */
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        validate(name, value);
    };

    /**
     * 入室ボタン押下時
     * @param event
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(login(formField));
        console.log(event);
    };

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
                <form onSubmit={handleSubmit}>
                    <TextField
                        title={"名前"}
                        name={"userName"}
                        placeholder={"名前を入力してください"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={formError.userName}
                    />
                    <div className="mb-3">
                        <button
                            className="w-full p-3 border border-gray-200 rounded-md shadow-md bg-indigo-500 disabled:opacity-50 focus:outline-none"
                            disabled={isLoginButtonDisabled()}
                        >
                            入室する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
