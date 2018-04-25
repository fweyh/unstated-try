import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import AppContainer from './containers/app';

class Word extends Component {

    handleClick = addWord => {
        addWord(this.props)
    }

    render() {
        return (
            <Subscribe to={[AppContainer]}>{
                appContainer => (
                    <span className="w" onClick={() => this.handleClick(appContainer.addWord)}>{this.props.content}</span>
                )
            }</Subscribe>
        );
    }
}

export default Word;