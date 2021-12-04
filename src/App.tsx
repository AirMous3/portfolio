import React, { ReactElement } from 'react';

import './App.scss';
import { Contacts } from './components/contacts/Contacts';
import { RunningSonic } from './components/features/RunningSonic';
import { Header } from './components/header/Header';
import { Main } from './components/mainContent/Main';
import { RemoteWork } from './components/remoteWork/RemoteWork';
import { Skills } from './components/skills/Skills';
import { Works } from './components/works/Works';

export const App = (): ReactElement => (
  <div>
    <Header />
    <Main />
    <Skills />
    <Works />
    <RemoteWork />
    <Contacts />
    <RunningSonic />
  </div>
);
