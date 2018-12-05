import React from 'react'
import PropTypes from 'prop-types'
import logopic from '../images/favicon.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <span className="icon fa-code"></span> */}
            <img className="logopic" src={logopic} alt="" title="MirlZ" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Front-end Web Development</h1>
                <p>Hello, my name is Eugenia. I am a front-end web developer who's based in Singapore. I am motivated in achieving good visual aesthetics for websites and making it easy to use. </p> 
                <p>I'm currently working on ReactJS / MobX web applications. I have recently joined <a href="https://www.zenika.sg/#/" target="_blank" title="Zenika Singapores">Zenika Singapore</a> as a consultant. Feel free to contact me for any interesting projects! ;) </p>
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
