import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../CSS/NewLogin.css'
import { useNavigate } from 'react-router-dom'
// import GoogleLogin from 'react-google-login'
import jwtDecode from "jwt-decode";


const Login = () => {

  const [data, setData] = useState({ Email: '', Password: '' })
  const [loading, setLoading] = useState(false)
  const [Reload, setReload] = useState(false)

  const ClientID = '413608614848-gmqs78helmifodlf6i1428is5f892fk4.apps.googleusercontent.com'

  const navigate = useNavigate()

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setData({ Email: '', Password: '' })
    return
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!data.Email || !data.Password) {
      window.alert("Please Enter All Fields")
      return
    }


    try {
      setLoading(true)

      const response = await axios.post('http://localhost:5000/api/login', data)

      localStorage.setItem('token', response.data.token)

      if (response.data.success) {
        window.alert("Logged In Successfully")
        navigate('/')
      } else {
        window.alert(response.data.error);
      }
      setLoading(false)

      return
    } catch (error) {
      window.alert(error.message)
      setLoading(false)
      return
    }

  }

  const handlecallback = async (res) => {
    const userObject = jwtDecode(res.credential)
    console.log(userObject);
    const response = await axios.post('http://localhost:5000/api/GoogleLogin', {Email:userObject.email})
    console.log(response.data);
    if(response.data.success === true){
      localStorage.setItem('token', response.data.token)
      navigate('/')
    }else{
      window.alert(response.data.error)
    }
    
  }

  useEffect(() => {

    google.accounts.id.initialize({
      client_id: '413608614848-gmqs78helmifodlf6i1428is5f892fk4.apps.googleusercontent.com',
      callback: handlecallback
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: "outline", size: 'large' }
    )

    google.accounts.id.prompt()

  }, [])





  return (
    <div>
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div class="content">
            <div class="input-field">
              <input onChange={handlechange} name="Email" value={data.Email} type="email" placeholder="Email" autocomplete="nope" />
            </div>
            <div class="input-field">
              <input onChange={handlechange} name="Password" value={data.Password} type="password" placeholder="Password" autocomplete="none" />
            </div>
            <div>
              <div id="signInDiv"></div>


            </div>
            <a href="#" class="link">Forgot Your Password?</a>
          </div>
          <div class="action">
            <button type='reset' onClick={handleReset}>Cancel</button>
            <button type='submit'>{loading ? 'Loading' : "Sign in"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login