import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div>
      <div className="signUpContainer">
        <p>STEP 2 OF 3</p>
        <h1>Create a password to start <br/>your membership</h1>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <form action="">
            <div className="emailInput">
                <input type="email" placeholder='Email'/>
            </div>
            <div className="pwInput">
                <input type="password" placeholder='Add a password'/>
            </div>
            <button className="nexbtn">Next</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
