import './services.css'
import { FaWifi } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { FaMapMarked } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Services = () =>{

    return <>
    <div className='adjust-row'>
    <div className='main-card'>
            <div className='service-card'>
                <FaWifi size='40px'/>
                <h1>High Speed internet</h1>
                <p>Optical fiber connections provided in not only in your
                     cabins but rather to all of 
                    the BriSphere scenic working spaces and dining areas.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    <div className='main-card'>
            <div className='service-card'>
                <MdFastfood size='40px'/>
                <h1>Healthy Meals</h1>
                <p>OA healthy breakfast and pleasant dinner will be serviced at your
                     space every single day for 
                    your entire duration of stay with option of paid order within BriSphere.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    <div className='main-card'>
            <div className='service-card'>
                <IoHome size='40px'/>
                <h1>Homely Stay</h1>
                <p>Designed for working professionals with spacious interiors, 
                    comfortable beds and sleekly 
                    attached kitchen are some of the comforts provided in your space.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    </div>

    <div className='adjust-row'>
    <div className='main-card'>
            <div className='service-card'>
                <FaCarSide size='40px'/>
                <h1>Transportation</h1>
                <p>Optical fiber connections provided in not only in your
                     cabins but rather to all of 
                    the BriSphere scenic working spaces and dining areas.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    <div className='main-card'>
            <div className='service-card'>
                <IoMdBicycle size='40px'/>
                <h1>Food Delivery</h1>
                <p>OA healthy breakfast and pleasant dinner will be serviced at your
                     space every single day for 
                    your entire duration of stay with option of paid order within BriSphere.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    <div className='main-card'>
            <div className='service-card'>
                <FaMapMarked size='40px'/>
                <h1>Tourism</h1>
                <p>Designed for working professionals with spacious interiors, 
                    comfortable beds and sleekly 
                    attached kitchen are some of the comforts provided in your space.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    </div>
    
    <div className='adjust-row'>
    <div className='main-card'>
            <div className='service-card'>
                <FaFlag size='40px'/>
                <h1>Job</h1>
                <p>Optical fiber connections provided in not only in your
                     cabins but rather to all of 
                    the BriSphere scenic working spaces and dining areas.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    <div className='main-card'>
            <div className='service-card'>
                <IoCarSport size='40px'/>
                <h1>Rental Service</h1>
                <p>OA healthy breakfast and pleasant dinner will be serviced at your
                     space every single day for 
                    your entire duration of stay with option of paid order within BriSphere.<span className='readmore'>read more..</span></p>
            </div>
    </div>
    <div className='main-card'>
            <div className='service-card'>
                <MdOutlineShoppingCart size='40px'/>
                <h1>Online Shop</h1>
                <p>Designed for working professionals with spacious interiors, 
                    comfortable beds and sleekly 
                    attached kitchen are some of the comforts provided in your space. <span className='readmore'>read more..</span></p>
            </div>
    </div>
    </div>
    </>     
}