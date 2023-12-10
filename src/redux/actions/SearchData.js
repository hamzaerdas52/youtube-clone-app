import axios from "axios";

const searchAction = (search) => async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            q: search,
            part: 'snippet',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        headers: {
            'X-RapidAPI-Key': '558fe87806mshcf0e8ffa8c6ca6fp1a2e5ajsn80b5f6c66ea7',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        dispatch({ type: "GET_SEARCH_VIDEOS", payload: response.data })
    } catch (error) {
        console.error(error);
    }
}

export default searchAction;