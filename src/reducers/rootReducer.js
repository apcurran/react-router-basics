const initState = {
    posts: [
        // Sample Data
        { id: 1, title: "Charmander is a Pokemon.", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { id: 2, title: "Pikachu is a Pokemon.", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { id: 3, title: "Squirtle is a Pokemon.", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
    ]
};

function rootReducer(state = initState, action) {
    if (action.type === "DELETE_POST") {
        const newPosts = state.posts.filter(post => action.id !== post.id);

        return {
            ...state,
            posts: newPosts
        };
    }

    return state;
}

export default rootReducer;