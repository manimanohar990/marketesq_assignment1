import { Clintmaildata } from '../Clintmaildata/Clintmaildata'
import { Footer } from '../Footer/Footer'
import { Navbar2 } from '../Navbar2'


import './clintdetails.css'

export const Clintdetails = () =>{
    return<>
    <div>
        <header className='header_bar'><h3>Brishere</h3>
        <header className='header_txt'>
            <p className='about'>Discover</p>
            <p className='about'>Services</p>
            <p className='about'>About Us</p>
        </header> 
        </header>
        <div><Navbar2/></div>
        <div><Clintmaildata/></div>

        <div className='terms'>
            <h2>terms and conditions
                privacy policy
                refunds</h2>
                <p>the rules that govern the financial transaction between a buyer and a 
                    seller, and include details about how, when, and where payment is to be mad</p>
        </div>
        <>
        <Footer/>
        </>
    </div>
    </>
}