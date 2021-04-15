import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Counter from "./commponents/Counter/index";
import FootballMathes from "./commponents/FootballMatches/index";
import store from "./store";

import './App.css';

function App() {
    return (
        <>
            <Provider store={store}>
                <Fragment>
                    <Counter initialTime={10} />
                    <FootballMathes />
                </Fragment>
            </Provider>
        </>
    );
}

export default App;





