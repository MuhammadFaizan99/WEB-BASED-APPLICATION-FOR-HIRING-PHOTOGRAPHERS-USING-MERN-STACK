import React from 'react'
// import '../CSS/blog_style.css'


const Blog_page3 = () => {


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
          <h1 class="title1">Beyond the Cake: Creative Birthday Photoshoot Ideas</h1>
        </div>


        <div class="container1" style={{ width: "80vw", margin: "0px auto" }}>
          <h3 class="name1"><br /><br />Jerry Jenkins</h3>
          <h6 class="date1">January 5, 2019</h6>
          <div class="text1">
            <p class="font1" style={{"lineHeight":"2.5rem",fontSize:"17px"}}>Birthdays are special milestones that deserve to be celebrated and captured in a unique and creative way. In this blog post, we explore exciting ideas to elevate birthday photoshoots beyond the traditional cake smash. From themed setups to innovative props and stunning locations, let's dive into the world of creative birthday photography. We'll share tips on styling, lighting, and composition to help you create memorable and stunning birthday photographs.
            <br />Bring the magic of fairy tales to life with an enchanting birthday photoshoot. Create a whimsical set with props like a vintage storybook, fairy lights, and delicate flowers. Dress the birthday child in a fairy or prince/princess costume, and capture their wonder and joy as they immerse themselves in their favorite storybook world.
            <br />Transform the birthday photoshoot into an adventurous experience. Choose an outdoor location like a forest, beach, or mountainscape, and incorporate props such as a vintage suitcase, map, or camping gear. Encourage the birthday child to explore and interact with their surroundings, capturing candid moments filled with excitement and curiosity.
            <br />Embrace the nostalgia of a bygone era with a vintage-themed birthday photoshoot. Select a retro-inspired location or create a set reminiscent of a vintage tea party or carnival. Use props like vintage cameras, antique toys, or vintage-inspired clothing to add authenticity and charm to the images.
            <br />Let your birthday child's imagination soar with a superhero or villain-themed photoshoot. Dress them up as their favorite characters, complete with costumes and props. Use dramatic lighting and dynamic poses to capture their heroic or mischievous spirit, showcasing their inner superhero or villain.</p>
          </div>
          <div class="image1">
            <img src="./Pictures/Images/Portfolio_photographer/blog4.jpg" alt="" style={{"width":"100vw"}}/>
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

export default Blog_page3



