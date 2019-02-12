import React from 'react'
import '../static/styles/main.scss'

const EmailCapture = (props) => (
  <div className="emailCaptureContent">
    <div className="captureInput">
      <input placeholder="First name" />
    </div>
    <div className="captureInput">
      <input placeholder="Last name" />
    </div>
    <div className="captureInput">
      <input placeholder="Email" />
    </div>
    <div className="captureButton">
      <label>{'Get our emails'.toUpperCase()}</label>
    </div>
  </div>
)

export default EmailCapture
