import React from 'react';
import {Header} from "./Header/Header";
import {Main} from "./MainContent/Main";
import {Skills} from "./Skills/Skills";
import {Jobs} from "./Jobs/Jobs";
import "./App.css"
import {DistanceWork} from "./DistanceWork/DistanceWork";




function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Jobs/>
            <DistanceWork/>
            {/*<img className={"sonic"} src={"https://qph.fs.quoracdn.net/main-qimg-d64de00d6f45c3e1dd56dfe308fdc41f"} alt={"sonic"}/>*/}
            <img className={"sonic"} src={"https://c.tenor.com/jD4sqQ5G6hIAAAAj/sonic-running.gif"} alt={"sonic"}/>
        </div>
    );
}

export default App;
