import React from 'react';
import "./App.css"
import {Header} from "./Header/Header";
import {Main} from "./MainContent/Main";
import {Skills} from "./Skills/Skills";
import {Jobs} from "./Jobs/Jobs";
import {DistanceWork} from "./DistanceWork/DistanceWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Jobs/>
            <DistanceWork/>
            <Contacts/>
            <Footer/>
            {/*<img className={"sonic"} src={"https://qph.fs.quoracdn.net/main-qimg-d64de00d6f45c3e1dd56dfe308fdc41f"} alt={"sonic"}/>*/}
            <img className={"sonic"} src={"https://c.tenor.com/jD4sqQ5G6hIAAAAj/sonic-running.gif"} alt={"sonic"}/>
        </div>
    );
}

export default App;
