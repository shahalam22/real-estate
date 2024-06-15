import { useState, useEffect } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const user = true;

    useEffect(() => {
        console.log(open);
    }, [open]);

    return (
        <nav>
            <div className='left'>
                <Link to="/" className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>DevEstate</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
            </div>
            <div className='right'>
                {user ? (
                    <div className='user'>
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                        <Link to={"/profile"} className='profile'>
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ):(
                    <>
                        <a href="/">Sign In</a>
                        <a href="/" className="register">Sign Up</a>
                    </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={()=>setOpen(!open)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Agents</Link>                    
                    <Link to="/">Sign In</Link>                    
                    <Link to="/">Sign Up</Link>                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar