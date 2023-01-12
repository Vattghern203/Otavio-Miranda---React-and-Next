import './styles.css';

import { Component } from 'react';

import { loadPosts } from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10
  }

  async componentDidMount() {
    
    await this.loadPosts()
  }
    
  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    
    const postsAndPhotos = await loadPosts()

    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({ posts, page : nextPage})
  }

/*
  componentDidUpdate() {
    // Realiza os dados comandos sempre que o componente atualiza
  }

  componentWillUnmount() {
    // Realiza os dados comandos sempre que o componente é desmontado.
    // Muito útil para limpara sujeira de componente que não estão mais em tela
  }
*/
  render() {

    const { posts, page, postsPerPage, allPosts } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-container'>
          <Button

            text="Load more"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          
          />
        </div>
      </section>
    );
  }
}