import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from "./components/header/header";
import {HashRouter, Route, Link } from "react-router-dom";
import './p5.css';
import './styles/main.css';



ReactDOM.render(
    <div>
        <Header />
        <HashRouter>
            <div className = "container">
                <div id='toolbar'>
                    <Link className='button' to="/example">Example</Link>
                    <Link className='button' to="/states">States</Link>
                </div>
                <Route path="/states" component={States}/>
                <Route path="/example" component={Example}/>
            </div>
        </HashRouter>
    </div>,
    
    document.getElementById('reactapp'),
  );