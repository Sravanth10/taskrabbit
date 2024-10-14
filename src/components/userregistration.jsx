import React from 'react'
import './user.css'

const Register = () => {
  return (
    <div className='fo'><form action=''>
        <h2>Email ID:</h2>
        <input type="email" />
        <h2>Name: </h2>
        <input type="text" />
        <h2>Pasword: </h2>
        <input type="text" />
        <br /><br />
        <input className='submit' type="submit"  />
        
        </form></div>
  )
}

export default Register;