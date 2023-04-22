import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "../views/Chat";
import { Login } from "../views/Login";
import { NotFound } from "../views/NotFound";

export const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Chat />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
