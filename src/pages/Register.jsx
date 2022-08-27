import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { API } from '../services/API';
import './Register.css'

const Register = () => {
  const {register, handleSubmit} = useForm();
  let navigate = useNavigate()
  
  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("petName", data.petName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);
    formData.append("type", data.type);

    API.post("/pets/register", formData).then((res) => {
      if (res) {
        navigate('/login')
      }
    })
  }

  return (
    <section className='register_section'>
      <h2>Please, register :3</h2>
      <form onSubmit={handleSubmit(formSubmit)}>

        <label htmlFor="petName">Name</label>
        <input type="text" id="petName" name="petName" {...register("petName")} />
        
        <label htmlFor="email">E-mail</label>
        <input type="text" id='email' name='email' {...register("email")} />
        
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' {...register("password")} />
        
        <label htmlFor="avatar">Avatar</label>
        <input type="file" id='avatar' name='avatar' {...register("avatar")} />
        
        <label htmlFor="type">Type</label>
        <input type="text" id='type' name='type' {...register("type")} />

        <button type='submit'>Register</button>
      </form>
    </section>
  )
}

export default Register