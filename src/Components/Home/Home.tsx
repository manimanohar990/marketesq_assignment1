import { Booking } from '../Booking/Booking'
import { Discover } from '../Discover/Discover'
import { Footer } from '../Footer/Footer'
import { Services } from '../Services/Services'

import './home.css'
export const Home = () =>{
    return <div>
        <header className='header_bar'><h3>Brishere</h3>
        <header className='header_txt'>
            <p className='about'>Discover</p>
            <p className='about'>Services</p>
            <p className='about'>About Us</p>
        </header> 
        </header>
        <div>
        <Booking/>
        </div>
        <div className='head'>
        <h2>Discover</h2>
        </div>
        <Discover/>

        <div className='head'>
            <h2>Services</h2>
        </div>
        <Services/>
        <>
        <Footer/>
        </>
    </div>
}
