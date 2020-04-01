import React, { Component } from "react";

class Post extends Component {
    state = {
        post: null
    };

    async componentDidMount() {
        const id = this.props.match.params.post_id;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        console.log(data);

        this.setState({
            post: data
        });
    }

    render() {
        const post = this.state.post ? (
            <div className="post-page">
                <h1 className="post-title">{ this.state.post.title }</h1>
                <p className="post-content">{ this.state.post.body }</p>
            </div>
        ) : (
            <div className="message">Loading...</div>
        )



        return (
            <div className="post-page">
                { post }
            </div>
        )
    }
}

export default Post;