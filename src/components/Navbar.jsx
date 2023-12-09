import React from 'react'
import icons from '../assets/icons'
import images from '../assets/images/images'
import '../index.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='youtube-icon'>
                <icons.menu className='icon-style' />
                <img src={images.youtube} alt="" className='w-32' />
            </div>
            <div className='search-container'>
                <div className='search-input'>
                    <input className='search' type="text" placeholder='Ara' />
                    <div className='search-icon-container'>
                        <icons.search className='icon-style' />
                    </div>
                </div>
                <div className='search-microphone-icon-container'>
                    <icons.microphone className='icon-style' />
                </div>
            </div>
            <div className='user-operations-container'>
                <icons.video className='icon-style' />
                <icons.notification className='icon-style' />
                <div className='user-icon'>

                </div>
            </div>
        </div>
    )
}

export default Navbar;