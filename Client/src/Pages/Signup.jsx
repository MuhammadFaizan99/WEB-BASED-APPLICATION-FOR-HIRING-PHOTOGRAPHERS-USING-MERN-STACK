import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import '../CSS/Login.css'
import jwtDecode from "jwt-decode";
import { useNavigate } from 'react-router-dom';



const Signup = () => {

  const [data, setData] = useState({ Firstname: '', Lastname: '', Email: '', Password: '' })
  const [ConfirmPass, setConfirmPass] = useState('')
  const navigate = useNavigate()


  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleReset = () => {
    // e.preventDefault()
    setData({ Firstname: '', Lastname: '', Email: '', Password: '' })
    setConfirmPass('')
  }

  const handlecallback = async (res)=>{
    // console.log(res.credential);
    const userObject = jwtDecode(res.credential)
    data.Firstname=userObject.given_name;
    data.Lastname= userObject.family_name;
    data.Email = userObject.email;
    data.Password = Math.random().toString(36).slice(-8);
    const resp = await axios.post('http://localhost:5000/api/Googleregister', data)
    if(resp.data.success){
      localStorage.setItem('token', resp.data.token)
      navigate('/')
    }else{
      window.alert(resp.data.error)
    }
  }

  useEffect(() => {

    google.accounts.id.initialize({
      client_id: '413608614848-gmqs78helmifodlf6i1428is5f892fk4.apps.googleusercontent.com',
      callback: handlecallback
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: "outline", size:'large'}
    )

    // google.accounts.id.prompt()

  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!data.Password || data.ConfirmPass || !data.Email || !data.Firstname || !data.Lastname) {
      window.alert('Please enter All field')
      return
    }

    if (data.Password !== ConfirmPass) {
      window.alert("Passwords does not Match")
      return
    }



    try {

      const response = await axios.post('http://localhost:5000/api/register', data)
      console.log(response);
      localStorage.setItem('token', response.data.token)

      if (response.data.success) {
        window.alert("Registered Successfully")
        handleReset()

      } else {
        window.alert(response.data.error);
      }


    } catch (error) {
      window.alert(error.message)
    }

  }

  return (

    <div>
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up </h1>
          <div class="content">

            <div class="input-field">
              <input onChange={handlechange} name="Firstname" value={data.Firstname} type="text" placeholder="First Name" autocomplete="nope" />
            </div>

            <div class="input-field">
              <input onChange={handlechange} type="text" placeholder="Last Name" name="Lastname" autocomplete="nope" value={data.Lastname} />
            </div>

            <div class="input-field">
              <input onChange={handlechange} type="Email" placeholder="Email" name="Email" autocomplete="nope" value={data.Email} />
            </div>

            <div class="input-field">
              <input onChange={handlechange} minLength={5} type="password" placeholder="Password" name="Password" autocomplete="new-password" value={data.Password} />
            </div>

            <div class="input-field">
              <input type="password" minLength={5} onChange={(e) => setConfirmPass(e.target.value)} name="ConfirmPass" placeholder="Confirm Password" autocomplete="new-password" value={ConfirmPass} />
            </div>
            <div id="signInDiv">Sign Up with Google</div>



            <a href="#" class="link">Forgot Your Password?</a>
          </div>
          <div class="action">
            <button type='reset' onClick={handleReset}> Cancel </button>
            <button type='submit'> Sign Up </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup