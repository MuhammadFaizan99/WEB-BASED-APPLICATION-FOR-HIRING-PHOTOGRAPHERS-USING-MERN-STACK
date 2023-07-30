import axios from "axios";
import { useEffect, useMemo, useState } from "react";
// import { useRecoilValue, useRecoilState } from "recoil";
// import { UserState } from "./Recoil/Atoms/UserAtoms";
// import { UserSelector } from './Recoil/Selectors/UserSelectors'


const FilteredPhotographer = (props) => {



  // const [text, setText] = useRecoilState(UserState);
  const [Allphotographers, setAllphotographers] = useState([])

  // const {Name, Location, Events, }

  useEffect(() => {


    const getphotographers = async () => {

      try {
        const link = `http://localhost:5000/api/filteredPhotographers`

        const { data } = await axios.post(link, props)
        console.log(data);
        setAllphotographers(data)
 
      } catch (error) {
        window.alert(error.message)
      }
    }

    getphotographers()

  }, [props.handleSubmit])






  return (
    <>




      <section class="trainer-filter trainer" id="trainer">

        <h1 class="heading">Our Photographer</h1>

        <div class="box-container" style={{ paddingBottom: '400px' }}>

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
      </section>





    </>
  )
}

export default FilteredPhotographer
