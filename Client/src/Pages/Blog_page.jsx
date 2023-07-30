import React from 'react'
// import '../CSS/blog_style.css'


const Blog_page = () => {


  return (
    <div>
      <head>
        <title>Final Year Project</title>
        <script src="https://kit.fontawesome.com/621bdb459d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../CSS/blog.css" />
        <link rel="stylesheet" href="../CSS/blog_style.css" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
      </head>


      <body>



        <div class="header1">
          <h1 class="title1">The Magic of Destination Weddings in Pakistan: Celebrating Exquisite Locations and Cultures</h1>
        </div>


        <div class="container1" style={{ width: "80vw", margin: "0px auto" }}>
          <h3 class="name1"><br /><br />Jane Friedman</h3>
          <h6 class="date1">September 17, 2021</h6>
          <div class="text1">
            <p class="font1" style={{"lineHeight":"2.5rem",fontSize:"17px"}}>Destination weddings add a touch of magic to the already enchanting journey of love and commitment. In this blog post, we dive into the captivating world of destination weddings in Pakistan. Join us as we showcase stunning photographs, highlighting the unique locations, rich cultures, and breathtaking backdrops that make these weddings truly unforgettable. We will also explore the challenges and rewards faced by photographers in capturing weddings in different settings and offer practical tips for those working in destination wedding scenarios.<br></br>
            Pakistan is blessed with diverse landscapes that provide stunning backdrops for destination weddings. From the picturesque valleys of Gilgit-Baltistan to the golden beaches of Karachi, each region offers its own distinct charm. Through breathtaking photographs, we will showcase the beauty of destinations such as Hunza, Murree, Lahore, and the coastal areas, celebrating the natural splendor that adds an extraordinary element to these weddings.
            <br></br>Destination weddings in Pakistan provide a unique opportunity to celebrate and immerse in the rich cultural heritage of the country. From vibrant mehndi ceremonies to traditional dances and elaborate wedding rituals, each cultural aspect adds layers of charm and visual splendor. We will explore the diverse customs and traditions observed in different regions of Pakistan and how they contribute to the magical ambiance of destination weddings.
            <br />Capturing weddings in diverse locations brings its own set of challenges and rewards for photographers. We will discuss the logistical hurdles of working in unfamiliar environments, managing equipment in remote areas, and adapting to different lighting conditions. On the other hand, we will highlight the immense creative opportunities, the chance to capture unique cultural moments, and the joy of exploring new landscapes that make destination wedding photography an enriching experience.</p>
          </div>
          <div class="image1">
            <img src="./Pictures/Images/Portfolio_photographer/blog1.jpg" alt="" style={{"width":"100vw"}}/>
          </div>
        </div>

        <div class="box1">
          <h4 class="name">Leave a Comment</h4>
          <form action="#" method="POST">
            <div class="inputBox_comment1">
              <h5 class="comment">Comment</h5>
              <input type="text" required />
            </div>
            <div class="inputBox">
              <h5 class="comment">Name (required)</h5>
              <input type="text" required />
            </div>
            <div class="inputBox">
              <h5 class="comment">Email (will not be published) (required)</h5>
              <input type="text" required />
            </div>
            <div class="inputBox">
              <h5 class="comment">Website</h5>
              <input type="text" />
            </div>
            <input type="submit" />
          </form>
        </div>



        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="JS/index.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"></script>

      </body>

    </div>
  )
}

export default Blog_page



