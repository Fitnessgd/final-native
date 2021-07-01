export default (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            action.payload.id
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'REMOVE_POST':
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i] == action.payload) {
                    state.posts.splice(i, 1);
                    break;
                }
            }
            return {
                ...state,
                posts: state.posts
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
