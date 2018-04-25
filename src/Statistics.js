import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import AppContainer from './containers/app';

class Statistics extends Component {
    render() {
        return (
            <div className="Statistics">
                <h2>Definitions</h2>
                <ul>
                <Subscribe to={[AppContainer]}>
                {appContainer =>
                    appContainer.state.words.map(word => (
                        <li key={word.id}>{word.description} : {word.definition}</li>
                    ))
                }</Subscribe></ul>
            </div>
        );
    }
}

export default Statistics;