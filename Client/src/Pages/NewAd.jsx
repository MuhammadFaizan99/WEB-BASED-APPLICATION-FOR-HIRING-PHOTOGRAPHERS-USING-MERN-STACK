import FormData from 'form-data'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const NewAd = () => {

  const [Name, setName] = useState('')
  const [Description, setDescription] = useState('')
  const [BackImage, setBackImage] = useState()
  const [Location, setLocation] = useState('Islamabad')
  const [PriceRange, setPriceRange] = useState('0-20000')
  const [Events, setEvents] = useState('Wedding')


  const handleImage = (e) => {
    if (e.target.name === 'BackImage') {
      setBackImage(e.target.files[0])
    }
  }

  const handleReset = (e) => {
    // e.preventDefault()
    setName('')
    setDescription('')
    setLocation('')
    setPriceRange('')
    setEvents('')
    setBackImage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // console.log(BackImage);


    if (!Name || !Description || !BackImage) {
      window.alert('Please enter All Required field')
      return
    }

    let myFormData = new FormData()
    myFormData.append('Name', Name)
    myFormData.append('Description', Description)
    myFormData.append('Events', Events)
    myFormData.append('PriceRange', PriceRange)
    myFormData.append('Location', Location)
    myFormData.append('image', BackImage)
    myFormData.append('token', localStorage.getItem('token'))

    // const config = {
    //   headers: { 'content-type': 'multipart/form-data' }
    // }


    try {
      const response = await axios.post('http://localhost:5000/api/AddAnOffer', myFormData)
      console.log(response);

      if (response.status === 200) {
        window.alert("Offer Submitted Successfully")
        handleReset()
      }
    } catch (error) {
      window.alert(error.message)
    }

  }


  return (
    <div>
      <head>
        <title>Post Ad - Photographer</title>
        <link rel="stylesheet" type="text/css" href="./src/CSS/postAd.css" />
      </head>
      <section class="post-ad" style={{ marginTop: "164px" }}>
        <div class="container">
          <h1 class="section-title">
            <i class="fas fa-camera"></i> Post Your Ad here...!
          </h1>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="name">
                <i class="fas fa-user"></i> Name
              </label>
              <input value={Name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div class="form-group">
              <label for="message">
                <i class="fas fa-comment"></i> Description
              </label>
              <textarea value={Description} onChange={(e) => setDescription(e.target.value)} id="Description" name="Description" placeholder="Enter Offer Description"></textarea>
            </div>
            <div class="form-group">
              <label for="event-type">
                <i class="fas fa-calendar-alt"></i> Event Type
              </label>
              <select value={Events} onChange={(e) => { setEvents(e.target.value) }} id="event-type" name="event-type">
                <option value="range" disabled selected>Event Type</option>
                <option value="" selected>All Event Types</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="portrait">Corporate</option>
                <option value="landscape">Concerts/festivals</option>
                <option value="portrait">Sports</option>
                <option value="landscape">Cultural</option>
              </select>
            </div>

            <div class="form-group">
              <label for="cities">
                <i class="fas fa-city"></i>Budget Range
              </label>
              <select value={PriceRange} onChange={(e) => { setPriceRange(e.target.value) }} id="cities" name="cities">
                <option value="range" disabled selected>Price Range</option>
                <option value="" selected>All Price Ranges</option>
                <option value="0-20000">Less than 20,000</option>
                <option value="20000-40000">20,000-40,000</option>
                <option value="40000-60000">40,000-60,000</option>
                <option value="60000-80000">60,000-80,000</option>
                <option value="80000-100000">80,000-100,000</option>
                <option value="100000+">More than 100,000</option>
              </select>
            </div>

            <div class="form-group">
              <label for="cities">
                <i class="fas fa-city"></i>City
              </label>
              <select value={Location} onChange={(e) => { setLocation(e.target.value) }} id="cities" name="cities">
                <option value="cities" disabled>Cities</option>
                <option value="" selected>All Locations</option>
                <option value="Rawalpindi">Rawalpindi/Islambad</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
              </select>
            </div>


            <div class="form-group">
              <label for="image-upload">
                <i class="fas fa-upload"></i> Upload Image
              </label>
              <input onChange={handleImage} name="BackImage" type="file" id="image-upload" />
            </div>

            <div class="form-group">
              <button type="submit">
                <i class="fas fa-bullhorn"></i>Post Ad
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default NewAd