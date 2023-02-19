import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className=''>

            {/* <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top">
                <div className="container"> <a className="navbar-brand d-flex align-items-center" href="#">

                    <Link to='/' ><a className="ml-3 font-weight-bold">BRAND</a></Link>
                </a> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbar4">
                        <ul className="navbar-nav mr-auto pl-lg-4">
                            <li className="nav-item px-lg-2 active"> <Link className="nav-link" to='/'> <span className="d-inline-block d-lg-none icon-width"><i className="fas fa-home"></i></span>Home</Link> </li>
                            <li className="nav-item px-lg-2"> <a className="nav-link" href="#"><span className="d-inline-block d-lg-none icon-width"><i className="fas fa-spa"></i></span>Services</a> </li>
                            <li className="nav-item px-lg-2"> <a className="nav-link" href="#"><span className="d-inline-block d-lg-none icon-width"><i className="far fa-user"></i></span>About</a> </li>

                            <li className="nav-item px-lg-2"> <a className="nav-link" href="/contact"><span className="d-inline-block d-lg-none icon-width"><i className="far fa-envelope"></i></span>Contact</a> </li>
                            <li className="nav-item px-lg-2"> <Link className="logihd nav-link" to='/login'><span className="d-inline-block d-lg-none icon-width"><i className=" far fa-envelope"></i></span>Login</Link> </li>
                        </ul>


                        <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                            <li className="nav-item"> <a className="nav-link" href="#">
                                <i className="fab fa-twitter"></i>
                            </a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">
                                <i className="fab fa-facebook"></i><span className="d-lg-none ml-3">Facebook</span>
                            </a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">
                                <i className="fab fa-instagram"></i><span className="d-lg-none ml-3">Instagram</span>
                            </a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">
                                <i className="fab fa-linkedin"></i><span className="d-lg-none ml-3">Linkedin</span>
                            </a> </li>
                        </ul>
                    </div>
                </div>
            </nav> */}


            <header>
                <nav className="navbar">
                    <ul>
                        <li><Link className='acn' to='/' >Home</Link></li>
                        <li><Link className='acn' to='/about'>About</Link></li>
                        <li><Link className='acn' to='/service'>Services</Link></li>
                        <li><Link className='acn' to='/contact'>Contact us</Link></li>
                        <li><Link className='acn' to='/login'>Login</Link></li>
                        <li><Link className='acn' to='/content'>Content</Link></li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
