import axios from "axios";

const detailAction = (id) => async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {
            part: 'contentDetails,snippet,statistics',
            id: id
        },
        headers: {
            'X-RapidAPI-Key': '558fe87806mshcf0e8ffa8c6ca6fp1a2e5ajsn80b5f6c66ea7',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        dispatch({ type: "GET_VIDEO", payload: response.data })
    } catch (error) {
        console.error(error);
    }
}

export default detailAction;