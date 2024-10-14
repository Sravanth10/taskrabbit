// client/src/App.js
import React from 'react';
import Register from './components/userregistration';
import List from './components/list'
import Image from './components/image';
import './App.css'

const App = () => {
    return (
        <div>
            <h1>Task Rabbit</h1>
            <Register />
            <List />
            <Image  />
        </div>
    );
};

export default App;
