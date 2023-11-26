import React from 'react';
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";


function App(){
    return (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    );
}

export default App;