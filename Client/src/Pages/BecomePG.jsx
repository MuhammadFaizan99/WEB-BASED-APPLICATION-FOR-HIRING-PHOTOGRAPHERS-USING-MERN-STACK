import axios from 'axios'
import FormData from 'form-data'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const BecomePG = () => {

  const [data, setData] = useState({
    Tagline: '', Description: '', Contactno: '', IndustryExp: '', ProfileImage: {}
    // , BackImage: {} 

  })
  const [ProfileImage, setProfileImage] = useState()
  const [BackImage, setBackImage] = useState()
  const [Location, setLocation] = useState('Islamabad')
  const [PriceRange, setPriceRange] = useState('0-20000')
  const [Events, setEvents] = useState('Wedding')
  const navigate = useNavigate()
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    if (e.target.name === 'ProfileImage') {
      setProfileImage(e.target.files[0])
    } else {
      setBackImage(e.target.files[0])
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setData({ Tagline: '', Description: '', Contactno: '', IndustryExp: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(Events, Location, PriceRange);

    if (!data.Tagline || !data.Description || !data.Contactno || !data.IndustryExp) {
      window.alert('Please enter All field')
      return
    }
    // data.ProfileImage = ProfileImage
    // data.BackImage = BackImage
    let myFormData = new FormData()
    myFormData.append('Tagline', data.Tagline)
    myFormData.append('Description', data.Description)
    myFormData.append('Contactno', data.Contactno)
    myFormData.append('Experience', data.IndustryExp)
    myFormData.append('image', ProfileImage)
    myFormData.append('Location', Location)
    myFormData.append('PriceRange', PriceRange)
    myFormData.append('Events', Events)
    myFormData.append('token', localStorage.getItem('token'))

   
    try {
      const response = await axios.post('http://localhost:5000/api/registerPhotographer', myFormData)
      console.log(response);

      if (response.status === 200) {
        window.alert("Registered Photographer Successfully")
        navigate('/')
      }
    } catch (error) {
      window.alert(error.message)
    }

  }

  return (

    <div>
      <div class="login-form">

        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <h1>Become A Photograper </h1>
          <div class="content">

            <div class="input-field">
              <input onChange={handlechange} name="Tagline" value={data.Tagline} type="text" placeholder="Enter your Tagline" autocomplete="nope" />
            </div>

            <div class="input-field">
              <input onChange={handlechange} type="text" placeholder="Write Something about yourself" name="Description" autocomplete="nope" value={data.Description} />
            </div>

            <div class="input-field">
              <input onChange={handlechange} type="text" placeholder="Industry Experience" name="IndustryExp" autocomplete="nope" value={data.IndustryExp} />
            </div>

            <div class="input-field">
              <input onChange={handlechange} type="text" placeholder="Your Contact number" name="Contactno" autocomplete="nope" value={data.Contactno} />
            </div>

            <div  >
              <select style={{
                width: "420px",
                height: "44px",
                fontSize: '15px',
                paddingLeft: '11px'
              }}
                value={Location} onChange={(e) => { setLocation(e.target.value) }} name="Location" id="City" placeholder="Cities">

                <option value="cities" disabled>Cities</option>
                <option value="" selected>All Locations</option>
                <option value="Rawalpindi">Rawalpindi/Islambad</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
              </select>
            </div>

            <select style={{
              width: "420px",
              height: "44px",
              marginTop: '15px',
              fontSize: '15px',
              paddingLeft: '11px'
            }}
              value={PriceRange} onChange={(e) => setPriceRange(e.target.value)} name="myCity" id="City">
              <option value="range" disabled selected>Price Range</option>
              <option value="" selected>All Price Ranges</option>
              <option value="0-20000">Less than 20,000</option>
              <option value="20000-40000">20,000-40,000</option>
              <option value="40000-60000">40,000-60,000</option>
              <option value="60000-80000">60,000-80,000</option>
              <option value="80000-100000">80,000-100,000</option>
              <option value="100000+">More than 100,000</option>
            </select>

            <select style={{
              width: "420px",
              marginTop: '15px',
              height: "44px",
              fontSize: '15px',
              paddingLeft: '11px'
            }}
              value={Events} onChange={(e) => setEvents(e.target.value)} name="myCity" id="City" placeholder="Events">
              <option value="events" disabled >Events</option>
              <option value="" selected>All Events</option>

              <option value="Wedding">Wedding events</option>
              <option value="Birthday">Birthday events</option>
              <option value="Corporate">Corporate events</option>
              <option value="concerts/festivals">Concerts/festivals</option>
              <option value="Sports">Sports events</option>
              <option value="Cultural">Cultural events</option>
            </select>



            <div className='input-field' style={{ marginTop: '15px' }}>
              <div>Provide Your Profile Image</div>
              <input onChange={handleImage} type="file" name="ProfileImage" id="ProfileImage" />
            </div>

            {/* <div className='input-field'>
              <div>Provide Your Cover Image</div>
              <input type="file" name="CoverImage" id="CoverImage" />
            </div> */}

            {/* <a href="#" class="link">Forgot Your Password?</a> */}
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

export default BecomePG