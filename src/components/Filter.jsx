import React from 'react'
import dataFilter from '../assets/data/dataFilter'

const Filter = ({ setLetter }) => {

  const filterClick = (data) => {
    setLetter(data.name);
  }

  return (
    <div className='flex items-center overflow-x-auto'>
      {dataFilter.map((data, index) => (
        <div onClick={() => filterClick(data)} key={index} className='bg-gray-100 hover:bg-gray-200 text-sm px-3 py-2 mx-2 rounded-3xl cursor-pointer'>
          {data.name}
        </div>
      ))}
    </div>
  )
}

export default Filter