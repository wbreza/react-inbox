import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './appRouter';

export default class App extends Component {
    render() {
        return (
            <section className="container-fluid">
                <AppRouter />
            </section>
        );
    }
}