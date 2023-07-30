import React from 'react'
// import '../CSS/blog_style.css'


const Blog_page2 = () => {


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
          <h1 class="title1">Incorporating Technology: The Rise of Drone Photography in Wedding Shoots</h1>
        </div>


        <div class="container1" style={{ width: "80vw", margin: "0px auto" }}>
          <h3 class="name1"><br /><br />WeddingWire(website)</h3>
          <h6 class="date1">February 25, 2022</h6>
          <div class="text1">
            <p class="font1" style={{"lineHeight":"2.5rem",fontSize:"17px"}}>In recent years, drone photography has revolutionized the world of wedding photography, offering a fresh and unique perspective to capture unforgettable moments. In this blog post, we shed light on the rising trend of drone photography in wedding shoots. Join us as we explore the remarkable perspectives, aerial views, and dramatic landscapes that drones can capture. We will highlight the benefits and challenges of using drones in wedding photography and provide insights on obtaining necessary licenses and adhering to regulations.
            <br />Drone photography allows wedding photographers to capture breathtaking images from high above, offering a whole new perspective. From aerial shots of the venue and surrounding landscapes to creative group portraits and intimate moments, drones provide a unique vantage point that adds depth and visual interest to the wedding album. We will showcase stunning examples of drone-captured images that showcase the grandeur of weddings like never before.
            <br />One of the significant advantages of drone photography is its ability to capture sweeping aerial views of the wedding venue and its surroundings. Drones can document the scale and beauty of outdoor ceremonies, reveal the stunning architecture of venues, or showcase picturesque landscapes. We will explore how these aerial shots bring a sense of awe and wonder to the wedding album, creating captivating visual narratives.
            <br />Drones excel in capturing dramatic landscapes that surround wedding venues. Whether it's a beachfront wedding, a mountainous backdrop, or a scenic countryside location, drones can showcase the natural beauty in all its glory. We will discuss how drone photography can highlight the grandeur of these landscapes, adding a cinematic touch to the wedding imagery.</p>
          </div>
          <div class="image1">
            <img src="./Pictures/Images/Portfolio_photographer/blog3.jpg" alt="" style={{"width":"100vw"}}/>
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

export default Blog_page2



