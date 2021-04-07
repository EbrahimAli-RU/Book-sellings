import React from 'react'

import logo from '../../assets/img/logo.png'
import user from '../../assets/img/user.jpg'
import Icon from '../../assets/img/sprite.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="trillo logo" className="logo" />
            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search Books...." />
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref={`${Icon}#icon-magnifying-glass`}></use>
                    </svg>
                </button>
            </form>
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${Icon}#icon-bookmark`}></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${Icon}#icon-chat`}></use>
                    </svg>
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src={user} alt="user" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">Jonas</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;