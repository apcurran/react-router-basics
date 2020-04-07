import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
    handleClick = () => {
        const id = this.props.post.id;
        this.props.deletePost(id);
        this.props.history.push("/"); // After deleting, redirect to home page
    }

    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post-page container">
                <h1 className="post-title">{ this.props.post.title }</h1>
                <p className="post-content">{ this.props.post.body }</p>
                <button onClick={ this.handleClick } className="post-delete-btn">Delete Post</button>
            </div>
        ) : (
            <div className="message container">Loading...</div>
        )



        return (
            <div className="post-page">
                { post }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const id = Number(ownProps.match.params.post_id);

    return {
        post: state.posts.find(post => post.id === id)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deletePost: (id) => dispatch({ type: "DELETE_POST", id: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);