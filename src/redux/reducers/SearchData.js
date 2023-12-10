
const searchReducer = (state = {getSearchVideos: []}, action) => {
    switch (action.type) {
        case "GET_SEARCH_VIDEOS":
            return {
                getSearchVideos: action.payload
            }
    
        default:
            return state;
    }
}

export default searchReducer;