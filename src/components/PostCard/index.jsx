import "./styles.css"

import P from 'prop-types'

import { React } from 'react'


export const PostCard = ({ id, cover, title, body }) => (
        <div key={id}  className='post' title={title}>
            <img src={cover} alt={title}/>
            <div className='post-content'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
      </div>
)

PostCard.propTypes = {

  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired
}
