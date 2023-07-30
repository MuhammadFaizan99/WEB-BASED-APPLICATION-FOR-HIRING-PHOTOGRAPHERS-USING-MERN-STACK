import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OrderDetails from './OrderDetails'



const SinglePortfolio = () => {

  const params = useParams()
  const [Loading, setLoading] = useState(true)
  const [UserData, setUserData] = useState()
  const [Offers, setOffers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const getUser = async () => {
      const user = await axios.post('http://localhost:5000/api/GetSinglePhotographer', { id: params.id })
      console.log(user.data);
      const Offers = await axios.post('http://localhost:5000/api/GetAllOffers', { id: params.id })

      setOffers(Offers.data)
      setUserData(user.data)
      setLoading(false)
    }

    getUser()
  }, [])

  const handleorder = async (data) => {
    data.orderPGID = UserData._id
    // console.log(data.orderPGID);
    // return
    data.token = localStorage.getItem('token')
    const res = await axios.post('http://localhost:5000/api/PlaceOrder', data)
    console.log("Response is ", res);

    navigate(`/order_detail/${res.data._id}`)
  }


  return (
    <div>


      <div class="mySlides">
        {/* <img src="../Pictures/Images/Portfolio_photographer/portfolio.jpg" style={{ width: '100%' }} /> */}
      </div>

      <div class="portfolio_img" style={{ marginTop: '100px' }}>
        <img style={{ height: '210px', width: '210px', objectFit: 'cover', backgroundColor: 'black' }} class="circular--square" src={`http://localhost:5000/uploads/${UserData && UserData.Image}`} />
      </div>

      <div class="portfolio_box">

        <h2 class="set3">{Loading ? "Loading" : UserData.Name}</h2>
        <img class="star" src="../Pictures/Images/Portfolio_photographer/star.png" style={{ width: '8%' }} />
        <p class="intro">
          <br />
          {Loading ? "Loading" : UserData.Tagline}</p>
        {/* <p>Islamabad, Pakistan</p> */}
        {/* <p class="intro"><br />{Loading ? "Loading" : UserData.Description}
          <br />
          <br />My cameras:<br />
          Canon R5(45 megapixels)<br />
          Canon 5DSR(50 Megapixels)<br />
          Phaseone XF IQ4(151 Megapixels)<br /> <br />

          All my studio lighting equipment is from Broncolor who are the leading manufacturers in studio lighting.<br />
        </p > */}
        <button class="button2"><span>CONTACT</span></button>
        <p class="intro"><br />Email: {Loading ? "Loading" : UserData.User.Email && UserData.User.Email}</p >
        <p class="intro"><br />Contact : {Loading ? "Loading" : UserData.Contact && UserData.Contact}</p >

        <p class="intro"><br />Industry expertise: {Loading ? "Loading" : UserData.Experience}</p >

      </div >




      <section class="offer">


        <h2 class="section-title" style={{ marginTop: '-326px' }}>Portfolio Samples</h2>
        <div class="work__container bd-grid">

        {
            !Loading && (
              Offers.length > 0 ? Offers.map((offer) => (
                <div class="work_border">
                  <a href="" class="work__img">
                    <img src={`http://localhost:5000/uploads/Offers/${offer && offer.Image}`} alt="" />
                  </a>
                  
                 
                </div>
              )) : (<div style={{ textAlign: 'center' }}>
                No Offers to show
              </div>))
          }
               
                
               
               

        </div>


        <h2 class="section-title" style={{ marginTop: "20px" }}>Offers</h2>

        <div class="work__container bd-grid">

          {
            Loading && (
              <div>
                Loading
              </div>
            )
          }


          {
            !Loading && (
              Offers.length > 0 ? Offers.map((offer) => (
                <div class="work_border">
                  {/* <a href="" class="work__img">
                    <img src={`http://localhost:5000/uploads/Offers/${offer && offer.Image}`} alt="" />
                  </a> */}
                  <h4 class="set">{offer.Name}</h4>
                  <h4 class="set2">{offer.PriceRange}</h4>
                  <p>{offer.Description}</p>
                  <button
                    onClick={() => handleorder(offer)}
                    class="button"><span>Place Order</span></button>
                </div>
              )) : (<div style={{ textAlign: 'center' }}>
                No Offers to show
              </div>))
          }

          {/* <div class="work_border">
            <a href="" class="work__img">
              <img src="../Pictures/Images/Portfolio_photographer/wedding.jpeg.crdownload" alt="" />
            </a>
            <h4 class="set">Wedding Photography</h4>
            <h4 class="set2">PKR 120,000</h4>
            <p>Hire the best photographer for your Wedding Photoshoot.</p>
            <a href="./order_details.html" target="__blank"><button class="button"><span>Place Order</span></button></a>
          </div>

          <div class="work_border">
            <a href="" class="work__img">
              <img src="../Pictures/Images/Portfolio_photographer/architecture.jpg" alt="" />
            </a>
            <h4 class="set">Architecture Photography</h4>
            <h4 class="set2">PKR 90,000</h4>
            <p>Hire the best photographer for the Architectural Photography.</p>
            <a href="./order_details.html" target="__blank"><button class="button"><span>Place Order</span></button></a>
          </div>

          <div class="work_border">
            <a href="" class="work__img">
              <img src="../Pictures/Images/Portfolio_photographer/brand.jpg" alt="" />
            </a>
            <h4 class="set">Brand/Product Photography</h4>
            <h4 class="set2">PKR 40,000</h4>
            <p>Hire the best photographer for your Brand's Photography.</p>
            <a href="./order_details.html" target="__blank"><button class="button"><span>Place Order</span></button></a>
          </div>

          <div class="work_border">
            <a href="" class="work__img">
              <img src="../Pictures/Images/Portfolio_photographer/interior.jpg" alt="" />
            </a>
            <h4 class="set">Interior-Design Photography</h4>
            <h4 class="set2">PKR 70,000</h4>
            <p>Hire the best photographer for Interior Design Photography.</p>
            <a href="./order_details.html" target="__blank"><button class="button"><span>Place Order</span></button></a>
          </div>

          <div class="work_border">
            <a href="" class="work__img">
              <img src="../Pictures/Images/Portfolio_photographer/food.jpg" alt="" />
            </a>
            <h4 class="set">Food Photography</h4>
            <h4 class="set2">PKR 20,000</h4>
            <p>Hire the best photographer for the Food Photography.</p>
            <a href="./order_details.html" target="__blank"><button class="button"><span>Place Order</span></button></a>
          </div> */}

        </div>
      </section>
    </div >
  )


}

export default SinglePortfolio