import React, { useState } from 'react'
import icons from '../assets/icons'
import images from '../assets/images/images'
import '../index.css';

const Navbar = () => {

    const [searchKeyword, setSearchKeyword] = useState("");

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    const search = () => {
        if (searchKeyword.length > 0) {
            window.location = `/search/${searchKeyword}`;
        }
    }

    return (
        <div className='navbar-container'>
            <div className='youtube-icon'>
                <icons.menu className='icon-style' />
                <img src={images.youtube} alt="" onClick={() => window.location = "/"} className='w-32 cursor-pointer' />
            </div>
            <div className='search-container'>
                <div className='search-input'>
                    <input
                        onKeyUp={onKeyPress}
                        value={searchKeyword}
                        onChange={e => setSearchKeyword(e.target.value)}
                        className='search'
                        type="text"
                        placeholder='Ara' />
                    <div className='search-icon-container cursor-pointer' onClick={search}>
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
                <div className='flex items-center justify-center'>
                    <icons.user className='icon-style' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;