// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderNoActiveEvent = () => (
    <div className="no-active-container">
      <p className="no-active-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegister = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p className="no-active-heading">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  renderRegister = () => (
    <div className="register-container">
      <div className="icon-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="success-icon"
        />
      </div>
      <p className="no-active-heading">
        You have already registered for the event
      </p>
    </div>
  )

  renderRegistrationsClosed = () => (
    <div className="register-container">
      <div className="icon-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="register-image"
        />
      </div>
      <p className="heading">Registrations Are Closed Now</p>
      <p className="no-active-heading">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {registrationStatus} = this.props
    switch (registrationStatus) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()
      case 'REGISTERED':
        return this.renderRegister()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationsClosed()
      default:
        return this.renderNoActiveEvent()
    }
  }
}

export default ActiveEventRegistrationDetails
