import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'
import Filter from '../components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import homeAction from '../redux/actions/HomeData'

const Home = () => {

    const dispatch = useDispatch();
    const { getVideos } = useSelector(state => state.getVideos);
    const [letter, setLetter] = useState("new");

    useEffect(() => {
        dispatch(homeAction(letter))
    }, [dispatch, letter])

    return (
        <div className='home-container'>
            <Filter setLetter={setLetter}/>
            <div className='videos-container'>
                {
                    getVideos?.items?.map((videos, index) => (
                        <HomeCard key={index} videos={videos} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home