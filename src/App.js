import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: []   
  }

  componentDidMount() {
    
    this.loadPosts()
  }
    
  loadPosts = async () => {
    const postsReponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsReponse, photoResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

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
        <div className="posts">
          {posts.map(post => (
            <div key={post.id}  className='post'>
              <img src={post.cover} alt={post.title}/>
              <div className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;