import { Link } from "react-router-dom"
export const Navbar = () =>{
    return<div className="navbar">
        <Link className="link" to="/">Go to Home</Link>
        <Link className="link1" to="/clintdetails">Back to Details</Link>
        
    </div>
}