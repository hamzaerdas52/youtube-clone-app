import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import detailAction from '../redux/actions/DetailData';
import DetailCard from '../components/DetailCard';
import Recommendedbar from '../components/Recommendedbar';

const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { getVideo } = useSelector(state => state.getVideo);

  useEffect(() => {
    dispatch(detailAction(id));
  }, [dispatch, id])

  return (
    <div className='grid grid-cols-4 gap-4'>
      {getVideo?.items?.map((video, index) => (
        <div className='col-span-3'>
          <DetailCard key={index} video={video} />
        </div>
      ))}
      <div className='col-span-1'>
        <Recommendedbar />
      </div>
    </div>
  )
}

export default Detail