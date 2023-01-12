import "./styles.css"

export const PostCard = ({ id, cover, title, body }) => (
        <div key={id}  className='post' title={title}>
            <img src={cover} alt={title}/>
            <div className='post-content'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
      </div>
)