import './App.css';

import { Component } from 'react';

import { loadPosts } from './utils/load-post';
import { Posts } from './components/Posts';

class App extends Component {
  state = {
    posts: []   
  }

  async componentDidMount() {
    
    await this.loadPosts()
  }
    
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts()

    this.setState({ posts: postsAndPhotos })
  }
  componentDidUpdate() {
    // Realiza os dados comandos sempre que o componente atualiza
  }

  componentWillUnmount() {
    // Realiza os dados comandos sempre que o componente é desmontado.
    // Muito útil para limpara sujeira de componente que não estão mais em tela
  }

  render() {

    const { posts } = this.state

    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;