import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../services/API';

const Register = () => {
  return (
    <section className='register_section'>
      <h2>Please, register :3</h2>
      <form>
        <label htmlFor="petName">Name</label>
        <input type="text" id='petName' name='petName' />
        
        <label htmlFor="email">E-mail</label>
        <input type="text" id='email' name='email' />
        
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' />
        
        <label htmlFor="avatar">Avatar</label>
        <input type="file" id='avatar' name='avatar' />
        
        <label htmlFor="type">Type</label>
        <input type="text" id='type' name='type' />

        <button type='submit'>Register</button>
      </form>
    </section>
  )
}

export default Register