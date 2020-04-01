import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await data.json();

        this.setState({
            posts: response.slice(0, 10)
        });
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <Link className="post-link" to={ `/posts/${post.id}` } key={ post.id }>
                        <article className="post" >
                            <h3 className="post__title">{ post.title }</h3>
                            <p>{ post.body }</p>
                        </article>
                    </Link>
                );
            })
        ) : (
            <p className="message">No posts</p>
        )

        return (
            <div className="container">
                <h1>Home</h1>
                { postList }
            </div>
        );
    }
}

export default Home;