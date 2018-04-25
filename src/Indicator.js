import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import AppContainer from './containers/app';

class Indicator extends Component {
    render() {
        return (
            <div className="Indicator" style={{
                "border":"1px solid black",
                "width":"20%",
                "float":"right"
            }}>
                Concepts
                <ul>
                    <Subscribe to={[AppContainer]}>
                    {appContainer =>
                        appContainer.state.words.map(word => (
                            <li key={word.id}>{word.description}</li>
                        ))

                    }</Subscribe>
                </ul>
            </div>
        );
    }
}


export default Indicator;