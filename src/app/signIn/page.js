import Link from 'next/link'
import React from 'react'

function signIn() {
  return (
    <div>
      <br></br><h1 className='text-center'>SingIn Page</h1>

      <form class="login">
  <h2>Welcome, User!</h2>
  <p>Please log in</p>
  <input type="text" placeholder="User Name" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Log In" />
  <div class="links">
    <a href="#">Forgot password</a>
    <a href="#">Register</a>
  </div>
</form>


      
    </div>
  )
}

export default signIn
