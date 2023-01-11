import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "title 1",
        body: "body 1",
      },

      {
        id: 2,
        title: "title 2",
        body: "body 2",
      },

      {
        id: 3,
        title: "title 3",
        body: "body 3",
      },
    ]   
  }

  render() {

    const { posts } = this.state

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;