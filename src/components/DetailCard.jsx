import React from 'react'
import ReactPlayer from 'react-player'
import icons from '../assets/icons'
import moment from 'moment'

const DetailCard = ({ video }) => {
    return (
        <div className='mx-5 my-2 w-full'>
            <div className='me-6'>
                <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${video?.id}`} 
                width={"100%"}
                height={"25rem"}/>
            </div>
            <div className='my-3 w-full'>
                <div className='font-bold'>
                    {video?.snippet?.title}
                </div>
                <div className='flex my-2 items-center justify-between w-full'>
                    <div className='flex justify-start'>
                        <div className='flex space-x-3'>
                            <icons.user className='w-10 h-10' />
                            <div>
                                <div className='font-semibold text-sm'>{video?.snippet?.channelTitle}</div>
                                <div className='text-xs text-gray-500'>10.000 Abone</div>
                            </div>
                        </div>
                        <div className='border-2 border-solid border-gray-200 btn ms-6'>
                            Katıl
                        </div>
                        <div className='flex items-center justify-center space-x-2 ms-3 btn'>
                            <span><icons.notification className='icon-style' /></span>
                            <span>Abone olundu</span>
                            <span><icons.down className='icon-style' /></span>
                        </div>
                    </div>

                    <div className='flex space-x-3 me-4'>
                        <div className='flex items-center justify-center'>
                            <div className='flex btn space-x-1'>
                                <span><icons.like className='icon-style' /></span>
                                <span>{video?.statistics?.likeCount}</span>
                            </div>
                            <span>|</span>
                            <span className='btn'><icons.dislike className='icon-style' /></span>
                        </div>
                        <div className='btn flex items-center justify-center space-x-2'>
                            <span><icons.share className='icon-style' /></span>
                            <span>Paylaş</span>
                        </div>
                        <div className='btn flex items-center justify-center space-x-2'>
                            <span><icons.dowload className='icon-style' /></span>
                            <span>İndir</span>
                        </div>
                        <div className='btn flex items-center justify-center'>
                            <span><icons.threeDot /></span>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-slate-100 my-6 p-2 rounded-md hover:bg-slate-200 me-4'>
                    <div className='text-sm space-x-2'>
                        <span>{video?.statistics?.viewCount} görüntülenme</span>
                        <span>{moment(video?.statistics?.publishedAt).startOf('day').fromNow()}</span>
                    </div>
                    <div className='text-sm my-4'>
                        <span>{video?.snippet?.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard