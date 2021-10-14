import React from 'react';
import "./App.css"
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/MainContent/Main";
import {Skills} from "./Components/Skills/Skills";
import {Works} from "./Components/Works/Works";
import {DistanceWork} from "./Components/DistanceWork/DistanceWork";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <DistanceWork/>
            <Contacts/>
            <Footer/>
            {/*<img className={"sonic"} src={"https://qph.fs.quoracdn.net/main-qimg-d64de00d6f45c3e1dd56dfe308fdc41f"} alt={"sonic"}/>*/}
            <img className={"sonic"} src={"https://c.tenor.com/jD4sqQ5G6hIAAAAj/sonic-running.gif"} alt={"sonic"}/>
        </div>
    );
}

export default App;
