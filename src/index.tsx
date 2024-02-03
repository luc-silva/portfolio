import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Portfolio />
        </Provider>
    </React.StrictMode>
);
