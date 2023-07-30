import React from 'react'
// import '../CSS/blog_style.css'


const Blog_page1 = () => {


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
          <h1 class="title1">Beyond the Lens: Unveiling the Role of Wedding Photographers as Storytellers in Pakistan</h1>
        </div>


        <div class="container1" style={{ width: "80vw", margin: "0px auto" }}>
          <h3 class="name1"><br /><br />Anum Zafar</h3>
          <h6 class="date1">July 1, 2022</h6>
          <div class="text1">
            <p class="font1" style={{"lineHeight":"2.5rem",fontSize:"17px"}}>Wedding photographers are not just observers; they are storytellers who have the incredible responsibility of capturing and preserving one of life's most precious moments. In this blog post, we delve into the multifaceted role of wedding photographers as storytellers in the context of Pakistan. Join us as we explore the importance of understanding the couple's narrative, creating a shot list that captures key moments, and weaving together images to tell a cohesive and emotional story of the wedding day. Through examples of wedding albums, we will highlight how photographers effectively convey the couple's journey, reflecting the unique cultural tapestry of Pakistan.
            <br />Every couple has a unique story that forms the foundation of their wedding day. As wedding photographers, it is crucial to invest time in getting to know the couple, their backgrounds, and their vision for the wedding. We will discuss the significance of understanding the couple's narrative, which allows photographers to capture moments that reflect their personalities, cultural heritage, and shared experiences.
            <br />A well-crafted shot list serves as a roadmap for capturing key moments throughout the wedding day. We will explore the essential shots that should be included, such as the bride's preparations, groom's anticipation, emotional exchanges, cultural rituals, and joyous celebrations. By incorporating these moments, photographers can ensure a comprehensive coverage that tells a complete story.
            <br />Authentic emotions are at the heart of every wedding story. We will delve into the art of capturing candid moments that reflect the love, happiness, and connections between the couple and their loved ones. From stolen glances to tears of joy, these spontaneous moments add depth and authenticity to the narrative.</p>
          </div>
          <div class="image1">
            <img src="./Pictures/Images/Portfolio_photographer/blog2.jpg" alt="" style={{"width":"100vw"}}/>
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

export default Blog_page1



