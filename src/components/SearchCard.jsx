import React from 'react'
import images from '../assets/images/images'
import icons from '../assets/icons'
import moment from 'moment'

const SearchCard = ({searchVideos}) => {

    const searchCardClick = () => {
        window.location = `/videos/${searchVideos?.id?.videoId}`
    }
    
  return (
    <div className='grid grid-cols-5 h-64 my-6 space-x-6 cursor-pointer' onClick={searchCardClick}>
        <div className='col-span-2'>
            <img src={searchVideos?.snippet?.thumbnails.high.url} alt="" className='w-full h-60 rounded-md'/>
        </div>
        <div className='col-span-3 space-y-2'>
            <div>{searchVideos?.snippet?.title}</div>
            <div className='flex space-x-2 text-sm text-gray-600'>
                <div>200.000 Görüntülenme</div>
                <div>{moment(searchVideos?.snippet.publishedAt).startOf('day').fromNow()}</div>
            </div>
            <div className='flex space-x-2 items-center'>
                <div><icons.user className='icon-style'/></div>
                <div className='text-gray-600'>{searchVideos?.snippet?.channelTitle}</div>
            </div>
            <div className='text-gray-500'>
                <span>{searchVideos?.snippet?.description}</span>
            </div>
        </div>
    </div>
  )
}

export default SearchCard