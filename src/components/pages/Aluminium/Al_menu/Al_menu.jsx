import React from 'react';
import './Al_menu.scss'

const Al_menu = () => {
    return (
        <div className='almenu'>
            <button className="almenu__button">описание</button>
            <button className="almenu__button">качество</button>
            <button className="almenu__button">допонительные услуги</button>
            <button className="almenu__button">порошковая окраска</button>
        </div>
    );
};

export default Al_menu;