import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    render(){
        console.log(this.props);
        const post = this.props.post ? 
        (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ):(
            <div className="center">Loading Post.....</div>
        );
        return(
            <div className="container">
                {post}
            </div>
        ) 
    }

}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id;
    console.log(id);
    return {
        posts: state.posts.find((post) => {
            return post.id === id
        })
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        deletePost :(id) => { dispatch({type:'DELETE_POST', id:id})}
    }
}

export default connect(mapStateToProps)(Post);