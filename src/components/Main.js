import React from 'react'
import PropTypes from 'prop-types'

import profilepic from '../images/profilepic.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Eugenia</h2>
          <span className="image main"><img src={profilepic} alt="" title="My pretty pretty picture ;)" /></span>
          <p>Hello there, my name is Eugenia and I am a front-end web developer born in Singapore, raised in Singapore, and also based in Singapore currently ;) </p>
          <p>I've worked in a variety of companies before, my most notable works included websites for Hard Rock Hotels group and RELC International Hotel. My current works are mainly with React / MobX. You can refer to my <a href="https://www.linkedin.com/in/eugenia-poh-b48a4299" target="_blank" title="Eugenia's LinkedIn Profile">LinkedIn</a> for the full list of companies I've had the opportunity to work with before. </p>
          <p>I am currently working in an exciting new company, <a href="https://www.zenika.sg/#/" target="_blank" title="Zenika Singapore">Zenika Singapore</a> as a consultant. Do contact me if you would like to know more about me or to get together for any exciting projects! You can contact me through the contact tab on this site =)</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form action={`https://formspree.io/` + `${this.props.email}`} method="POST">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/eugenia-poh-b48a4299" target="_blank" title="LinkedIn" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.facebook.com/mirlz" target="_blank" title="Facebook" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://github.com/mirlz" target="_blank" title="Github" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main