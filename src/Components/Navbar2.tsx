import { Link } from "react-router-dom"
export const Navbar2 = () =>{
    return<div className="navbar">
        <Link className="link" to="/">Go to Home</Link>
        <Link className="link1" to="/payment">Back to Payment</Link>
        
    </div>
}