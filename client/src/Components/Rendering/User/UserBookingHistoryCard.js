import React from 'react'
import {FaPlaneDeparture,FaPlaneArrival} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import {AiOutlineFieldTime} from 'react-icons/ai'
import './UserBookingHistoryCard.css'


export default function UserBookingHistoryCard({user,booking}) {
    console.log(booking)
    return (
      <section className='booking-display'>
    <h3>Flight Info:</h3>
    <div className='booking-content'>
        <div className='location'>
            <h6> 
                <FaPlaneDeparture/> 
                {booking.from}
                <FaArrowRight className="transition-arrow"/>
                {booking.to} 
                <FaPlaneArrival/>
            </h6>
        </div>
        <div className='date-time'>
            <span className='date-span'>Departure</span>
            <h6>{booking.date}</h6>
            <h6><AiOutlineFieldTime/> {booking.time}</h6>
        </div>
        <div className='passenger-info'>
            <div className='passenger-count'>
                <h6><BsFillPeopleFill/> {booking.total_passenger}</h6>
                <span>Booked by</span>
            </div>
            <h5>{user.name} Thierry</h5>
        </div>
        <div className='manage-booking'>
            <button className='btn-manage'>Manage Booking</button>
        </div>
    </div>
</section>

    //     <section className='booking-display'>
    //     <h3>Flight Info:</h3>
    //     <div>
    //       <div className='location'>
    //         <h6> <FaPlaneDeparture/> {booking.from} to {booking.to} <FaPlaneArrival/></h6>
    //         <button className='btn-manage'>Manage Booking</button>
    //       </div>
    //       <div className='date'>
    //         <span className='date-span'>Departure time</span>
    //         <h6>{booking.date}</h6>
    //         <h6><AiOutlineFieldTime/> {booking.time}</h6>
    //       </div>
    //       <div className='passenger'>
    //         <h6><BsFillPeopleFill/>{booking.total_passenger} </h6>
    //         <span>Booked by</span>
    //         <h5>{user.name} Thierry</h5>
    //       </div>
    //     </div>
        
    // </section>
      )
}
