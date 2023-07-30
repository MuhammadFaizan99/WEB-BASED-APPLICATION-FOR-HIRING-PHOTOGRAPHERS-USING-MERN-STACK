import React from 'react'

const Contactus = () => {
  return (
    <div className='contact' style={{backgroundColor:'white'}}>
      <body>
        <header>
          <nav>
            <div class="logo" style={{paddingLeft:'95px', paddingTop:'30px'}}>Contact <span>Us</span></div>
          </nav>
        </header>
        <div class="container">
          <div class="left">

            <div class="column">
              <form action="">
                <label for="fname">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" autocomplete="off" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" autocomplete="off" required />
                <label for="country">City:</label>
                <select id="country" name="country" required>
                  <option value="islamabad">Islamabad</option>
                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                </select>
                <label for="subject">Subject:</label>
                <textarea id="subject" name="subject" placeholder="Write Something" style={{height:"170px"}}
                  required></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <br /><br />
          </div>

          <div class="row">
            <div class="column-card">
              <div class="card">
                <h3>Email Us</h3>
                <p>abc@gmail.com</p>
              </div>
            </div>

            <div class="column-card">
              <div class="card">
                <h3>WhatsApp Us</h3>
                <p>0300-12345678</p>
              </div>
            </div>

            <div class="column-card">
              <div class="card">
                <h3>Our Address</h3>
                <p>Lorem Ipsum Dolor Sit Amit</p>
              </div>
            </div>
          </div>
        </div>

      </body>
    </div>
  )
}

export default Contactus