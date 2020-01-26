import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import {cats} from './cats';

// MDB
import 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// ServiceWork (default)
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <CardList cats={cats} />

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
