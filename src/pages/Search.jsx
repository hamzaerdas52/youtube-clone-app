import React, { useEffect } from 'react'
import SearchCard from '../components/SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import searchAction from '../redux/actions/SearchData'

const Search = () => {

  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { getSearchVideos } = useSelector(state => state.getSearchVideos);

  useEffect(() => {
    dispatch(searchAction(keyword))
  }, [dispatch, keyword])

  return (
    <div className='bg-gray-100 px-20 py-10'>
      {
        getSearchVideos?.items?.map((searchVideos, index) => (
          <SearchCard key={index} searchVideos={searchVideos} />
        ))
      }
    </div>
  )
}

export default Search