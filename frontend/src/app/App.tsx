import { Provider } from "react-redux";
import { RouterConfig } from "../router/Route";
import { store } from "./store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterConfig />
            </Provider>
        </div>
    );
}

export default App;
