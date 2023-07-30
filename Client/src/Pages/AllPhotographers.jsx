import React from 'react'
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const AllPhotographers = () => {

  
  // const [text, setText] = useRecoilState(UserState);
  const [Allphotographers, setAllphotographers] = useState([])

  // const {Name, Location, Events, }

  useEffect(() => {


    const getphotographers = async () => {

      try {
 
        const { data } = await axios.get('http://localhost:5000/api/getPhotographers')
        setAllphotographers(data)
        console.log(data);

      } catch (error) {
        window.alert(error.message)
      }
    }

    getphotographers()

  }, [])



  return (
    <div><section class="trainer-filter trainer" id="trainer" style={{top:'-5px'}}>

    <h1 class="heading">Explore All Photographers</h1>

    <div class="box-container" style={{ paddingBottom: '100px' }}>

      {
        Allphotographers?.map(item => (
          <div key={item._id} class="box">
            <img
              src={"http://localhost:5000/uploads/" + item.Image}
              alt="" />
            <div class="info">
              <h3>{item.Name}</h3>
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
  </section></div>
  )
}

export default AllPhotographers