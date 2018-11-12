import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions/postAction'


class CreatePost extends Component {
     state = {
          title: '',
          body: ''
     }

     handleChange = (e) => {
          this.setState({[e.target.name]: e.target.value})
     }

     handleSubmit = (e) => {
          e.preventDefault()
          let post = {...this.state, id: this.props.posts.length+1}
          console.log(post)
          this.props.createPost(post)
          this.setState({title: '', body: ''})
          this.props.history.push("/")
     }

     render() {
          return(
               <div className="container createPost">
                    <form onSubmit={this.handleSubmit}>
                         <label htmlFor="input">
                              <span>Create Post Title</span>
                              <input id="input" name="title" type="text" className="input-field" placeholder="Title"
                                             onChange={this.handleChange}  value={this.state.title}/>
                         </label>
                         <label htmlFor="input">
                              <span>Create Post Body</span>
                              <input id="input" name="body" type="text" className="input-field" placeholder="Body"
                                             onChange={this.handleChange} value={this.state.body}/>
                         </label>
                         <div className="right">
                              <button className="btn red" type="submit">Create</button>
                         </div>
                    </form>
                    <img src="https://media.giphy.com/media/l46CwEYnbFtFfjZNS/giphy.gif" alt="Gif" style={{width: '250px', height: 'auto'}}/>
               </div>
          )
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          createPost: (post) => {dispatch(createPost(post))}
     }
}

const mapStateToProps = (state) => {
     return {
          posts: state.posts
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)
