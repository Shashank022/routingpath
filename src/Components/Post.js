import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postactions';

class Post extends Component {

    handleDeleteClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/home');
    }

    handleEditClick = () => {
        console.log(this.props);
        
    }

    render(){
        console.log(this.props);
        const post = this.props.post ? 
        (
           
            <div className="post">
                <div className = "card-panel">
                    <h4 className="center">{this.props.post.title}</h4>
                    <p>{this.props.post.body}</p>
                    <div className="center" >
                        <button className="btn green center" onClick={this.handleEditClick}>Edit Post</button>
                        <button className="btn red lighten-2 center "  onClick={this.handleDeleteClick}>Delete Post</button>
                    </div>
                </div>
            </div>
        ):(
            <div className="center">Loading Post.....</div>
        );  
        return(
            <div className="container">
                { post }
            </div>
        ) 
    }

}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        deletePost :(id) => { dispatch(deletePost(id))}
    }
}


export default connect(mapStateToProps, matchDispatchToProps)(Post);