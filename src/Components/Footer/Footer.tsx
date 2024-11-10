import MyMapComponent from '../Map'
import './footer.css'

export const Footer = ()=>{
    return <>
        <div className='footer-card'>
            <div>
            <h1>BriSphere</h1>
            <p>
            Spituk, Ladakh, <br/>
            India, 194101<br/>
            +91 - 7764997033<br/>
            amit.jha6700@gmail.com
            </p>
            <button className='locaton'>Location</button>
            </div>
            <MyMapComponent/>
        </div>
    </>
}