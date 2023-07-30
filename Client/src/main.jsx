import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './index.css'

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import Login from './Pages/Login'
import SinglePortfolio from './Pages/SinglePortfolio'
import Signup from './Pages/Signup'
import BecomePG from './Pages/BecomePG'
import FilteredPhotographer from './Pages/FilterPage'
import Blogs from './Pages/Blogs'
import Blog_page from './Pages/Blog_page'
import NewAd from './Pages/NewAd'
import OrderDetails from './Pages/OrderDetails'
import Aboutus from './Pages/Aboutus'
import AllPhotographers from './Pages/AllPhotographers'
import Contactus from './Pages/Contactus'
import Blog_page1 from './Pages/Blog_page1'
import Blog_page2 from './Pages/Blog_page2'
import Blog_page3 from './Pages/Blog_page3'
import Blog_page4 from './Pages/Blog_page4'
import Blog_page5 from './Pages/Blog_page5'
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Blogs",
    element: <Blogs />,
  },

  {
    path: "/PostAnAd",
    element: <NewAd />,
  },

  {
    path: "/Blog_page",
    element: <Blog_page />,
  },
  {
    path: "/Blog_page1",
    element: <Blog_page1 />,
  },
  {
    path: "/Blog_page2",
    element: <Blog_page2 />,
  },
  {
    path: "/Blog_page3",
    element: <Blog_page3 />,
  },
  {
    path: "/Blog_page4",
    element: <Blog_page4 />,
  },
  {
    path: "/Blog_page5",
    element: <Blog_page5 />,
  },

  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/BecomePhotographer",
    element: <BecomePG />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },

  {
    path: "/Order_Detail/:id",
    element: <OrderDetails />,
  },

  {
    path: "/AboutUs",
    element: <Aboutus />,
  },

  {
    path: "/Photographers",
    element: <AllPhotographers />,
  },

  {
    path: "/ContactUs",
    element: <Contactus />,
  },

  // {
  //   path: "/SinglePortfolio",
  //   element: <SinglePortfolio />,
  // },

  {
    path: "/SinglePortfolio/:id",
    element: <SinglePortfolio />,
  },
  

  {
    path: "/FilteredPhotographer",
    element: <FilteredPhotographer />,
  },

]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <RecoilRoot>

      <Navbar />
      
      <RouterProvider router={router} />
      {/* <App /> */}
      {/* </RouterProvider>, */}
      <Footer />
    </RecoilRoot>

  </>
)
