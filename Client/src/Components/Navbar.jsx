import React, { useEffect, useState } from 'react'


const Navbar = () => {
  const [reload, setReload] = useState(false);
  const [burger,setBurger] = useState(true)

  useEffect(() => {
    setReload(current => !current)
  }, [localStorage])

  const signout = () => {
    localStorage.clear()
    setReload(!reload)
    window.alert("Signed Out Successfully")
  }
  const navBurger= () => {
    console.log(setBurger(!burger))
  }

  return (
    <>
    <nav class="navbar-content h-nav-resp">
      {
        reload ? "" : ""
      }
      <ul class="nav-list__navbar-content v-nav-resp">
        <div class="navbar-logo"><p>Photo</p><span>Grapher</span></div>
        <li><a href="/"><i class="fas fa-home"></i>Home</a></li>
        <li><a href="/AboutUs" target="_self"><i class="fas fa-info-circle"></i>About</a></li>
        <li><a href="/Photographers" target="_self"><i class="fas fa-user"></i>Photographers</a></li>
        <li><a href="/Blogs" target="_self"><i class="fas fa-pencil-alt"></i>Blogs</a></li>
        <li><a href="/ContactUS" target="_self"><i class="fas fa-phone"></i>Contact</a></li>
      </ul>

      <div class="rightNav v-nav-resp ">
        {/* <button class="rightNavbtn " id="dark-mode-btn" onclick="toggleDarkMode()">
            <i id="mode-icon" class="fas fa-moon"></i>
            <span id="mode-text">Dark mode</span>
          </button> */}
        {
          localStorage.getItem('token') && (
            <a href="/PostAnAd" target="_self"><button class="rightNavbtn "><i class="fas fa-bullhorn"></i> Post an Ad</button></a>
          )
        }

        {
          localStorage.getItem('token') &&  (
            <a href="/BecomePhotographer" target="_self"><button class="rightNavbtn "><i class="fas fa-bullhorn"></i> Become A Photographer</button></a>
          )
        }



        <a href="../Signup" target="_self">
          <button class="rightNavbtn "><i class="fas fa-user-plus"></i> Sign Up</button>
        </a>
        {
          !localStorage.getItem('token') && (
            <a href="../Login" target="_self"><button class="rightNavbtn "><i class="fas fa-sign-in-alt"></i> Sign In</button></a>
          )}
        {
          localStorage.getItem('token') && (
            // <a href="../Signup" target="_self">
            <button onClick={signout} class="rightNavbtn "><i class="fas fa-user-plus"></i> Sign Out</button>
            // </a>
          )
        }

      </div>
      <div class="nav-burger" onClick={navBurger}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </nav>
    </>
  )
}

export default Navbar