import React from 'react'
import dataSide from '../assets/data/dataSide'

const Sidebar = () => {
    return (
        <div className='sidebar-container sidebar-width '>
            {dataSide.map((data, index) => (
                <div key={index} className='sidebar-item sidebar-width'>
                    <span>
                        {data.icon}
                    </span>
                    <span>
                        {data.name}
                    </span>
                </div>
            ))}

        </div>
    )
}

export default Sidebar