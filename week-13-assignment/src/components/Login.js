import React, {Component} from 'react'

function Login() {
  return (
    <div className='container'>
        <section className='login'>
        <h3>Login to your BlankSpace Account.</h3>
        <div className='container'>
            <div className='row'>
                <div className='col-md py-3'>
                    <label for="userName" id='userName'>Username:</label>
                    <input type='text' className='form-control' id='exampleUserName'></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-md py-3'>
                    <label for="password" id='password'>Password:</label>
                    <input type='password' className='form-control' id='exampleUserName'></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-md py-3'>
                    <p>New Here? <a href=''>Create an Account</a></p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md py-3'>
                    <button type="submit" className='btn form-control' id='signIn'>Login</button>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Login