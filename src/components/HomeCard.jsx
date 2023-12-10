import React from 'react'
import icons from '../assets/icons'
import moment from 'moment'

const HomeCard = ({ videos }) => {

    const videoCardClick = () => {
        window.location = `videos/${videos?.id?.videoId}`
    }

    return (
        <div className='home-card-container' onClick={videoCardClick}>
            <div>
                <img src={videos?.snippet?.thumbnails.high.url} alt="" className='h-48 w-full rounded-lg' />
            </div>
            <div className='flex pt-3 space-x-3'>
                <div>
                    <icons.user className='w-10 h-10' />
                </div>
                <div className='space-y-1'>
                    <div className='font-semibold'>{(videos?.snippet?.title).substring(0, 60)} ...</div>
                    <div className='text-sm'>{videos?.snippet.channelTitle}</div>
                    <div className='flex items-center text-xs text-gray-700'>
                        <span>100.000 Görüntülenme</span>
                        <icons.dot />
                        <span>{moment(videos?.snippet.publishedAt).startOf('day').fromNow()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard