import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Front-end Web Development</h1>
                <p>Hello, my name is Eugenia. I am a front-end web developer who's based in Singapore. I am interested in making websites look nice and interactive. </p> 
                <p>I'm currently working on React / JS web applications. I have recently joined <a href="https://www.zenika.sg/#/" target="_blank" title="Zenika Singapores">Zenika Singapore</a> as a consultant. Feel free to contact me for any interesting projects! ;) </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
