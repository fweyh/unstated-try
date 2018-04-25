import React, { Component } from 'react';
import { Container } from 'unstated';
import Word from './Word.js';

class Book extends Component {
    render() {
        return (
            <div className="Book">
                <p><Word content="Some" definition="Juste un mot, source: machin."/> <Word content="word"/> <Word content="bla"/> <Word content="bli"/></p>
                <p><Word content="Some"/> <Word content="word"/> <Word content="bla"/> <Word content="bli"/></p>
            </div>
        );
    }
}


export default Book;