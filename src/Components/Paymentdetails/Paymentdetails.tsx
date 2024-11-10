import { Footer } from '../Footer/Footer'
import './paymentdetails.css';
import { FaCheckCircle } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Navbar } from '../Navbar';
export const Paymentdetails = () => {
    return <div>
        
        <div>
    <header className='header_bar'><h3>Brishere</h3>
    <header className='header_txt'>
        <p className='about'>Discover</p>
        <p className='about'>Services</p>
        <p className='about'>About Us</p>
    </header> 
    </header>
    <div>
        <Navbar/>
    <div className='form-card'>
                <div className='details'>
                    <div>
                        <h2>Amit Jha</h2>
                        <p>+91-7764997022</p>
                        <p>amit.jha6700@gmail.com</p>
                        <p>1 Adult 2 Children</p>
                    </div>
                    <hr/>
                    <div className='paymentslip'>
                        <div className='space'><h1><FaCheckCircle size="70px" color='green'/></h1></div>
                        <div>
                            <h2>Order Conform</h2>
                            <p>have Questions?</p>
                            <p className='para'>Contact us</p>
                        </div>
                    </div>
                </div>

                </div>  
    </div>
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
        <div className='rupi'>
        <h3>Rooms</h3>
        <p>
        1
        </p>
        </div>
        <hr/>
        <div>
        <button className='btn'> <span><LiaRupeeSignSolid size='13px'/></span> 12,430 <span className='icon'><AiOutlineArrowRight size='13px'/></span></button>
        
        </div>
    </div>
    </div>
    </div>
    <div>
    <Footer/>
    </div>
</div>
</div>
};