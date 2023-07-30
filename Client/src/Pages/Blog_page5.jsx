import React from 'react'
// import '../CSS/blog_style.css'


const Blog_page5 = () => {


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
          <h1 class="title1">Colors of Tradition: Celebrating the Vibrancy of Cultural Festivals in Pakistan</h1>
        </div>


        <div class="container1" style={{ width: "80vw", margin: "0px auto" }}>
          <h3 class="name1"><br /><br />Natasha Hussain</h3>
          <h6 class="date1">July 20, 2022</h6>
          <div class="text1">
            <p class="font1" style={{"lineHeight":"2.5rem",fontSize:"17px"}}>Cultural festivals are an embodiment of the rich traditions and vibrant heritage of a nation. In this blog post, we invite you to dive into the world of cultural festivals in Pakistan, where colors, costumes, and rituals come together to create an immersive experience. Join us as we explore the significance of these elements and showcase stunning photographs that capture the essence and energy of these festive celebrations.
            <br />Colors hold immense importance in Pakistani cultural festivals. Discuss the significance of vibrant hues, such as reds, yellows, greens, and blues, which symbolize joy, spirituality, and cultural identity. Explore the ways in which colors are used in traditional attire, decorations, and symbolic elements during festivals, infusing a sense of liveliness and visual splendor.
            <br />Highlight the captivating costumes and attire worn during cultural festivals in Pakistan. Explore the intricate embroidery, mirror work, and embellishments that adorn traditional outfits like shalwar kameez, lehengas, and ajraks. Discuss the historical and cultural significance behind these garments and their role in preserving cultural identity.
            <br />Cultural festivals in Pakistan are deeply rooted in rituals and traditions that have been passed down through generations. Discuss the rituals associated with each festival, such as the lighting of diyas during Diwali or the recitation of qawwalis during Urs celebrations. Showcase photographs that capture the participants engaged in these rituals, highlighting their devotion and spiritual connection.
            <br />Folk dances are an integral part of Pakistani cultural festivals, representing the regional diversity and artistic expressions of the country. Explore the captivating movements, vibrant costumes, and rhythmic beats of dances like Bhangra, Kathak, and Attan. Showcase photographs that freeze the dynamic moments of these dances, reflecting the energy and cultural pride of the performers.</p>
          </div>
          <div class="image1">
            <img src="./Pictures/Images/Portfolio_photographer/blog6.jpg" alt="" style={{"width":"100vw"}}/>
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

export default Blog_page5



