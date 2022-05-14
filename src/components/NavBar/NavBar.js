import React, { Component } from 'react'
import './NavBar.css'
import Logo from './logo/3.png'
import { Link } from 'react-router-dom';
var smoothScroll = require('smoothscroll');


export default class NavBar extends Component {

  handleClick(location) {
    if (this.props.match.path === '/contact') {
      
      (async () => {
        let pathPromise = new Promise((resolve, reject) => {
          this.props.history.push('/')
          resolve(this.props.history.location.pathname)
        })

        let newPath = await pathPromise
        if (newPath === '/') this.handleScroll(location)

      })()
    }

    else this.handleScroll(location)
  }

  handleScroll(location) {
    var destination = document.querySelector(`.${location}`);
    smoothScroll(destination)
  }

  goToContact = () => {
    this.props.history.push('/contact')
  }

  render() {
    return (
      <div className="header">

        <div className="center">
          <img src={Logo} alt="Logo" className="logo-image" onClick={() => this.props.history.push('/')} />
        </div>

        <nav className="main-navigation">
          <li onClick={() => this.handleClick('features')}>FEATURES</li>
          <li onClick={() => this.handleClick('about')}>ABOUT</li>
          <li onClick={this.goToContact}>CONTACT</li>
          
          <Link to="/signin" className="btn btn-primary">
            LOG IN
          </Link>
        </nav>
      </div>
    )
  }
}