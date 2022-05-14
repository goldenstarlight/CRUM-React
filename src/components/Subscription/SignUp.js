import React, { Component } from 'react'
import './SignUp.css'
import Subscription from './Subscription'
import Loading from '../Clients/Loading'
import Fade from 'react-reveal'
import logo from '../../assets/logo.png'
import axios from 'axios';

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      inProgress: false,
      progressText: '🏗️  Processing...',
      lifetime: false,
      agreeCheck: false
    }
    this.progressTimer = null;
  }


  render() {
    return (
      <Fade left>
        <div className="sign-up-container center column">

          <div className="payment-container center column">


            hello

          </div>

        </div>
      </Fade>
    )
  }
}
