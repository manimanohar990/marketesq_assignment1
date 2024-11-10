import './booking.css'
import { useNavigate } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaMinusCircle } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { useState } from 'react';
export const Booking = () =>{
    
    const [setRoom,getRoom]= useState(1);

    const handleRoomChange = (change:number)=>{
            getRoom(prev => Math.max(1, prev + change))
    }

    const navigate = useNavigate();

    const handleBooking = () =>{
        navigate('/Clintdetails')
    }

    return<div className='moving-card'> <div className='booking-card'>
                <div className='booking-child'>
                <h1>Work from</h1>
                <h1>ladakh</h1>
                <p>india's first true digital tourism eccosystem</p>
                <h2><span><IoLogoFacebook /></span> <RiInstagramFill /></h2>
                

                </div>
                <div>
                <img  className='img-config' src='https://res.cloudinary.com/dmgvoecio/image/upload/v1731067284/ladak_adaft7.jpg' alt='Image..'/>
                </div>            
    </div>
    <div className='date-card'>
    <div className='booking-sec'>
        <div className='pdg'>
        <h3>Check-in</h3>
        <input className='date-box' type='date' value="2022-02-01" disabled />
        </div>
        <hr/>
        <div className='pdg' >
        <h3>Check-out</h3>
        <input className='date-box' type='date' value="2022-02-07" disabled />
        </div>
        <hr className='bar'/>
        <div className='pdg' >
        <h3>Rooms</h3>
        <p>
        <button className='mini-btn' onClick={()=>handleRoomChange(-1)}><FaMinusCircle/></button> <span>{setRoom}</span> <button className='mini-btn' onClick={()=>handleRoomChange(1)}><GoPlusCircle/></button>
        </p>
        </div>
        <hr/>
        <button className='btn' onClick={handleBooking}>Book</button>
    </div>
    </div>
    </div>
}