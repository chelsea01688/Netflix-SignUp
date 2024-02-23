import React, { useState } from 'react';
import './SignUp.css'
import SignUpValidation from './SignUpValidation';


function SignUp() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});
    const [visible, setVisible] = useState(false);

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value})) 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(SignUpValidation(values));
    }

  return (
    <div>
      <div className="signUpContainer">
        <p className='smallest'>STEP <strong>2</strong> OF <strong>3</strong> </p>
        <h1>Create a password to start <br/>your membership</h1>
        <p className='testing'>Just a few more steps and you're done! <br/>We hate paperwork, too.</p>
        <form action="" onSubmit={handleSubmit}>
            <div className="emailInput">
                <input type="email" placeholder='Email' className='emailinput' name='email' onChange={handleInput}/>
                {errors.email && (
                <span className='danger'>
                    <i className="ri-close-circle-line" style= {{fontSize: "18px"}}></i> {errors.email}
                </span>
                )}
            </div>
            <div className="pwInput">
                <input type={visible ? "text" : "password"} placeholder='Add a password' className='pwinput' name='password' onChange={handleInput}/>
                <div className="eye" onClick={() => setVisible(!visible)}>
                    {
                        visible ? <i class="ri-eye-fill" style= {{fontSize: "20px"}}></i> : <i class="ri-eye-off-fill" style= {{color: "lightgrey", fontSize: "20px"}}></i>
                    }
                </div>
                {errors.password && (
                <span className='danger'>
                    <i className="ri-close-circle-line" style= {{fontSize: "18px"}}></i> {errors.password}
                </span>
                )}
            </div>
            <button type='submit' className="nextbtn">Next</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
