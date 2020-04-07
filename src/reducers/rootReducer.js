const initState = {
    posts: [
        // Sample Data
        { id: 1, title: "Charmander is a Pokemon.", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { id: 2, title: "Pikachu is a Pokemon.", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { id: 3, title: "Squirtle is a Pokemon.", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
    ]
};

function rootReducer(state = initState, action) {
    return state;
}

export default rootReducer;