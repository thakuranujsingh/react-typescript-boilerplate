import React from "react";
import { MuiTheme } from "./theme/";
import { Router } from "./Router";
import { Store } from "./context/UserContext";

function App() {
    return (
        <MuiTheme>
            <Store>
                <Router />
            </Store>
        </MuiTheme>
    );
}

export default App;
