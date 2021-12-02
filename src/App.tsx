import React from 'react';
import "./App.scss"
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/MainContent/Main";
import {Skills} from "./Components/Skills/Skills";
import {Works} from "./Components/Works/Works";
import {Contacts} from "./Components/Contacts/Contacts";
import {RemoteWork} from "./Components/RemoteWork/RemoteWork";
import {RunningSonic} from "./Components/Features/RunningSonic";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
            <Contacts/>
            <RunningSonic/>
        </div>
    );
}

export default App;
