import React from 'react'
// import '../CSS/blog_style.css'


const Blog_page4 = () => {


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
          <h1 class="title1">Elevating Corporate Event Photography: Creating Impactful Portraits</h1>
        </div>


        <div class="container1" style={{ width: "80vw", margin: "0px auto" }}>
          <h3 class="name1"><br /><br />Corporate Photography Pakistan(website)</h3>
          <h6 class="date1">November 11, 2021</h6>
          <div class="text1">
            <p class="font1" style={{"lineHeight":"2.5rem",fontSize:"17px"}}>Corporate events provide a unique opportunity to capture professional portraits that reflect the essence and atmosphere of the occasion. In this blog post, we delve into the art of creating impactful portraits in corporate event photography, with a focus on techniques and considerations specific to Pakistan. We will explore the importance of composition, lighting, and conveying a sense of professionalism and approachability in corporate portraits. By mastering these elements, photographers can elevate their craft and deliver stunning portraits that leave a lasting impression.
            <br />To create impactful portraits, it is crucial to understand the purpose behind them. Discuss the various applications of corporate portraits, such as marketing materials, company websites, or executive profiles. Highlight the importance of capturing the subject's personality, professionalism, and approachability in a single image that aligns with the corporate brand.
            <br />Prior to the event, communicate with the event organizers to identify key individuals who should be featured in the portraits. Plan the logistics, including location, timing, and any specific requirements or preferences. Discuss the significance of creating a comfortable and relaxed environment for the subjects to bring out their natural expressions.
            <br />Explore the principles of composition and framing that enhance the impact of corporate portraits. Discuss techniques such as the rule of thirds, leading lines, and negative space to create visually pleasing and engaging portraits. Encourage photographers to experiment with different angles, perspectives, and framing to capture unique and compelling images.
            <br />Lighting plays a critical role in portrait photography. Discuss the importance of utilizing natural light whenever possible, especially in outdoor settings. Provide guidance on using artificial lighting techniques such as diffused flash or reflectors to create flattering and well-balanced lighting for indoor portraits. Emphasize the importance of avoiding harsh shadows or unflattering lighting that can undermine the professional look.</p>
          </div>
          <div class="image1">
            <img src="./Pictures/Images/Portfolio_photographer/blog5.jpg" alt="" style={{"width":"100vw"}}/>
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

export default Blog_page4



