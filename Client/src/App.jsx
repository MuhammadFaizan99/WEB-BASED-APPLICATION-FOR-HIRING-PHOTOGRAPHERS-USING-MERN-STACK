import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import FilteredPhotographer from "./Pages/FilterPage";
import { UserState } from "./Recoil/Atoms/UserAtoms";
import jwtDecode from "jwt-decode";
// import { UserSelector } from './Recoil/Selectors/UserSelectors'


function App() {

  // const [text, setText] = useRecoilState(UserState);
  const [Allphotographers, setAllphotographers] = useState([])
  const [FilterON, setFilterON] = useState(false)


  const [Name, setName] = useState('')
  const [Location, setLocation] = useState('')
  const [PriceRange, setPriceRange] = useState('')
  const [Events, setEvents] = useState('')
  const [Submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const getphotographers = async () => {
      const { data } = await axios.get('http://localhost:5000/api/getPhotographers')
      setAllphotographers(data)
      try {
      } catch (error) {
        window.alert(error.message)
      }
    }
    getphotographers()
  }, [])

  // const handlecallback = (res)=>{
  //    const userObject = jwtDecode(res.credential)
  //   console.log(userObject);
  // }

  // useEffect(() => {

  //   google.accounts.id.initialize({
  //     client_id: '413608614848-gmqs78helmifodlf6i1428is5f892fk4.apps.googleusercontent.com',
  //     callback: handlecallback
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById('signInDiv'),
  //     {theme: "outline", size:'large'}
  //   )

  //   google.accounts.id.prompt()

  // }, [])




  const handleSubmit = (e) => {
    setSubmitted(!Submitted)
    setFilterON(true)
    e.preventDefault()
    console.log("subbmitted form");

  }

  const handleReset = (e) => {
    setName('')
    setPriceRange('')
    setEvents('')
    setLocation('')
    setFilterON(false)
  }


  return (
    <>
      {/* <div id="signInDiv"></div> */}

      <div class="header-background-content backimage">
        <h1>Find Photographer in Pakistan</h1>
        <p>With thousands of photographers, we have just the right one for you</p>
        <div class="primary__header-background-content">
          <form action="" onSubmit={handleSubmit}>

            <input value={Name} onChange={(e) => setName(e.target.value)} type="text" name="Name" id="Name" placeholder="Photographer Name" />

            <select value={Location} onChange={(e) => setLocation(e.target.value)} name="Location" id="City" placeholder="Cities">

              <option value="cities" disabled>Cities</option>
              <option value="" selected>All Locations</option>
              <option value="Rawalpindi">Rawalpindi/Islambad</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
            </select>

            <select value={PriceRange} onChange={(e) => setPriceRange(e.target.value)} name="myCity" id="City">
              <option value="range" disabled selected>Price Range</option>
              <option value="" selected>All Price Ranges</option>
              <option value="0-20000">Less than 20,000</option>
              <option value="20000-40000">20,000-40,000</option>
              <option value="40000-60000">40,000-60,000</option>
              <option value="60000-80000">60,000-80,000</option>
              <option value="80000-100000">80,000-100,000</option>
              <option value="100000+">More than 100,000</option>
            </select>

            <select value={Events} onChange={(e) => setEvents(e.target.value)} name="myCity" id="City" placeholder="Events">
              <option value="events" disabled >Events</option>
              <option value="" selected>All Events</option>

              <option value="Wedding" >Wedding events</option>
              <option value="Birthday">Birthday events</option>
              <option value="Corporate">Corporate events</option>
              <option value="concerts/festivals">Concerts/festivals</option>
              <option value="Sports">Sports events</option>
              <option value="Cultural">Cultural events</option>
            </select>
            <button type="reset" onClick={handleReset} class="btn-background-content"><i class="fas fa-filter"></i>Reset</button>

            <button type="submit" class="btn-background-content"><i class="fas fa-filter"></i> Filter Now</button>
          </form>
        </div>
        <div class="btn-bottom-background-content">
          <a href="#filter-container" ><button class=" btn-background-content primary__btn-bottom-background-content">Advanced Filter<i class="fa-solid fa-greater-than"></i></button></a>
        </div>
      </div>




      {
        FilterON ? (
          <FilteredPhotographer Submitted={Submitted} handleSubmit={handleSubmit} FilterON={FilterON} Name={Name} Location={Location} PriceRange={PriceRange} Events={Events} />
        ) : ''
      }


      {
        FilterON ? '' : (
          <section class="sell-car-content">
            <h1>Hire Your Photographer and Get the Best Price</h1>
            <div class="primary__sell-car-content">
              <div class="secondary-section1__sell-car-content">
                <h3>Post your Ad on PakPhotographer</h3>
                <div class="teritory-section1__sell-car-content">
                  <ul>
                    <li>Post your Ad for Free in 3 Easy Steps</li>
                    <li>Get Genuine offers from Verified Buyers</li>
                    <li>Sell your Photographs Fast at the Best Price</li>
                  </ul>
                </div>
                <a href="./postAd.html" target="_blank"><button class="btn-primary__sell-car-content "><i class="fas fa-bullhorn"></i> Post an Ad</button></a>
              </div>
              <div class="secondary-section2__sell-car-content">
                <h3>Try Photographer Sell It For Me</h3>
                <div class="teritory-section2__sell-car-content">
                  <ul>
                    <li>Dedicated Sales Expert to Sell your Photographs</li>
                    <li>We Bargain for you and share the Best Offer</li>
                    <li>We ensure Safe & Secure Transaction</li>
                  </ul>
                </div>
                <a href="/SignUp.html" target="_blank"><button class="btn-primary__sell-car-content btn-secondary__sell-car-content "><i class="fas fa-user-plus"></i> Register Yourself</button></a>
              </div>
            </div>
          </section>
        )
      }

      {
        FilterON ? "" : (
          <section class="trainer" id="trainer">

            <h1 class="heading">Our Top Photographer</h1>

            <div class="box-container" style={{ paddingBottom: '400px' }}>

              {
                // Allphotographers?.map(item => (
                Allphotographers.sort((a, b) => b.Reviews - a.Reviews).slice(0, 8).map(item => (
                  <div key={item._id} class="box">
                    <img
                      src={"http://localhost:5000/uploads/" + item.Image}
                      alt="" />
                    <div class="info">
                      <h3>{item.Name}</h3>
                      {
                        // item.Reviews && 
                        <h5 style={{ fontSize: '14px', fontWeight: '600', color: 'darkorange' }}>Reviews({item.Reviews})</h5>
                      }


                      <a href={`./SinglePortfolio/${item._id}`} target="__blank"><button
                        class="btn-primary__sell-car-content btn-trainer"><i class="fas fa-eye"></i> View
                        Portfolio</button>
                      </a>
                    </div>

                    <div class="share">
                      <a href="#" class="fab fa-facebook-f"></a>
                      <a href="#" class="fab fa-twitter"></a>
                      <a href="#" class="fab fa-instagram"></a>
                      <a href="#" class="fab fa-linkedin"></a>
                    </div>

                  </div>
                ))

              }



            </div>
          </section>
        )
      }

      {
        FilterON ? '' : (<div class="filter-container" id="filter-container">
          <h2>Filter Photographer Here</h2>

          <ul class="filter-menu hidden">
            <li data-target="all">All</li>
            <li data-target="camera">Camera Models</li>
            <li data-target="city">City</li>
          </ul>

          <div class="filter-item" id="filter-item">
            <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera1.jpg" alt="" /></div>
            <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera2.jpg" alt="" /></div>
            <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera3.jpg" alt="" /></div>
            {/* <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera4.png" alt=""></div>
                <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera5.jpg" alt=""></div>
                <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera6.jpg" alt=""></div>
                <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera7.jpg" alt=""></div>
                <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera8.jpg" alt=""></div>
                <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera9.jpg" alt=""></div>
                <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera10.jpg" alt=""></div>
                <div data-item="camera"><img src="Pictures/Images/Camera_pics/camera11.jpg" alt=""></div>
                <div data-item="city"><img src="Pictures/Images/Camera_pics/city1.png" alt=""></div>
                <div data-item="city"><img src="Pictures/Images/Camera_pics/city2.png" alt=""></div>
                <div data-item="city"><img src="Pictures/Images/Camera_pics/city3.png" alt=""></div> */}
          </div>
        </div>)
      }



    </>
  )
}

export default App
