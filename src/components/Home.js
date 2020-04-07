import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
    render() {
        const { posts } = this.props;
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

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(Home);