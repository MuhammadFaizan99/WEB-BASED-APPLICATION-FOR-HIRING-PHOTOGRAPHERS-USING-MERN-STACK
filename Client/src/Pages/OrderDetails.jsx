import React, { useEffect, useState } from 'react'
{/* <link rel="stylesheet" href="./CSS/order_details.css"> */ }
import "./../CSS/order_details.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const OrderDetails = (props) => {

  const params = useParams()
  const [OrderData, setOrderData] = useState({})
  const [date, setDate] = useState('')


  useEffect(() => {
    const getOrder = async () => {
      const res = await axios.post('http://localhost:5000/api/GetSingleOrder', { id: params.id })
      setOrderData(res.data)

      const formattedDate = new Date(res.data.createdAt).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      setDate(formattedDate)


      // console.log(res);
    }
    getOrder()
  }, [])

  return (
    <div>
      <div className='Order_details' style={{ backgroundColor: "white" }}>
        <h1><i class="fas fa-shopping-cart"></i> Order Details</h1>
        <table>
          <tr>
            <th><i class="fas fa-hashtag"></i> Order ID</th>
            <td>{OrderData._id}</td>
          </tr>
          <tr>
            <th><i class="far fa-calendar-alt"></i> Date of Order</th>
            <td>{date}</td>
          </tr>
          <tr>
            <th><i class="far fa-clock"></i> Deadline</th>
            <td>February 28, 2023</td>
          </tr>
          <tr>
            <th><i class="fas fa-dollar-sign"></i> Budget</th>
            <td>{OrderData.PriceRange}</td>
          </tr>
          <tr>
            <th><i class="fas fa-calendar-check"></i> Event</th>
            <td>{OrderData.Events}</td>
          </tr>
          <tr>
            <th><i class="fas fa-plus-square"></i>Total</th>
            <td>{OrderData.PriceRange}</td>
          </tr>
        </table>
        <section class="order-requirement-content">
          <h1><i class="fas fa-tasks"></i>Order Requirements</h1>
          <div class="primary__order-requirement-content">
            <ul>
              <li>What exactly must be accomplished?</li>
              <li>What is the maximum amount of time you have available?</li>
              <li>What is the maximum amount you are ready to charge?</li>
              <li>What are your fundamental needs?</li>
              <li>Do you have any further comments or suggestions to make?</li>
            </ul>
          </div>
        </section>
        <section class="order-start-content">
          <h1><i class="fas fa-clock"></i>Order Started</h1>
          <div class="primary__order-start-content">
            <p>By submitting order requirements,You can start your order....!!</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OrderDetails