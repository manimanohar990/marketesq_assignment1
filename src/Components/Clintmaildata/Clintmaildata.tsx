import './clintmaildata.css'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaMinusCircle } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Clintmaildata = ()=>{
    const [setRoom,getRoom]= useState(1);

    const handleRoomChange = (change:number)=>{
            getRoom(prev => Math.max(1, prev + change))
    }

    const navigate = useNavigate();

    const handlePayment = () =>{
        navigate('/payment')
    }
    return <>
    <div>
            <form className='form-card'>
                <div className='details'>
                <input className='input-card' type='txt' placeholder='Amith Jha' value="Amith Jha"/>
                <input className='input-card' type='email' placeholder='amith.jha6700@gmail.com' value="amith.jha6700@gmail.com" />
                </div>
                <div className='details'>
                <input className='input-card' type='number' placeholder='+9 - 7764997022'  value="+9 - 7764997022"/>
                <div className=''>
                    
                     <button className='spans'>1 Adult</button> <button className='spans'>2Children</button></div>
                </div>

                </form> 
    <div className='marg'>
                <div className='date-card'>
    <div className='booking-sec'>
        <div >
        <h3>Check-in</h3>
        <input className='date-box' type='date' value="2022-02-01" disabled />
        </div>
        <hr/>
        <div >
        <h3>Check-out</h3>
        <input className='date-box' type='date' value="2022-02-07" disabled />
        </div>
        <hr className='bar'/>
        <div >
        <h3>Rooms</h3>
        <p>
        <button className='mini-btn' onClick={()=>handleRoomChange(-1)}><FaMinusCircle/></button> <span>{setRoom}</span> <button className='mini-btn' onClick={()=>handleRoomChange(1)}><GoPlusCircle/></button>
        </p>
        </div>
        <hr/>
        <div>
        <button className='btn' onClick={handlePayment}> <span><LiaRupeeSignSolid size='13px'/></span> 12,430 <span className='icon'><AiOutlineArrowRight size='13px'/></span></button>
        <p className='pay'>Click to pay tocken amount</p>
        </div>
    </div>
    </div>
    </div>

                </div>
    </>
}