import './index.css'

const BlogItem = props => {
  const {value} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = value

  return (
    <li className="li">
      <div className="main-flex">
        <img src={imageUrl} alt={`image${id}`} className="image" />
        <div className="bottom-flex">
          <h1 className="heading">{title}</h1>
          <p className="para">{topic}</p>
          <div className="author-flex">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default BlogItem
