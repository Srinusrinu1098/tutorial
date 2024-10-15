import {Component} from 'react'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {BlogLists: []}

  componentDidMount = () => {
    this.getListOFBlogs()
  }

  getListOFBlogs = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()

    const formatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({BlogLists: formatedData})
  }

  render() {
    const {BlogLists} = this.state
    return (
      <ul>
        {BlogLists.map(eachItem => (
          <BlogItem key={eachItem.id} value={eachItem} />
        ))}
      </ul>
    )
  }
}
export default BlogList
