import { Container } from 'unstated';

class AppContainer extends Container {
  
  state = {
    words: []
  }

  id = 0;

  addWord = word => {

    const newWord = {
      id: this.id,
      description: word.content,
      definition: word.definition
    }

    this.setState({
      words: [...this.state.words, newWord]
    })
  }
}

export default AppContainer;
