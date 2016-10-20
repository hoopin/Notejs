// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// // import { fetchFolder } from '../action/action_folder'

// class ViewFolder extends Component {

//   constructor (props) {
//     super(props)
//     this.state = {likesCount: 0}
//     this.onLike = this.onLike.bind(this)
//   }

//   onLike () {
//     let newLikesCount = this.state.likesCount + 1
//     this.setState({likesCount: newLikesCount})
//   }

//   render () {
//     return (
//       <div>
//         Likes : <span>{this.state.likesCount}</span>
//         <div><button onClick={this.onLike}>Like Me</button></div>
//       </div>
//     )
//   }

// }

// function mapStateToProps (state) {
//   return { post: state.posts.post };
// }

// export default connect(mapStateToProps, { fetchFolder })(ViewFolder)
