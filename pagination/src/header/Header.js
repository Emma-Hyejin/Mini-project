import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="header_top">
                <h1>Pagination LOGO</h1>
            </div>
            <div className="header_bottom">
                <ul>
                    <li className="header_gallery">고양이</li>
                    <li className="header_gallery">여행</li>
                    <li className="header_gallery">맛집 탐방</li>
                    <li className="header_gallery">운동</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;