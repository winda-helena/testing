import React from 'react'
import logo from '../../Komponen/Img/logo.png'
import bgcar from '../../Komponen/Img/img_car.png'
import { Nav, Button } from 'react-bootstrap';

import './header.css'

export const Header = () => {
    return (
        <div className="Header">
          <div className="header container-fluid" id="navigasi">
            <nav className="navbar nav navbar-expand-lg ">
              <div className="container">
                <a href="#navigasi">
                  <img src={logo} alt="logo" />
                </a>
                <div className="button btn-info">
                  <Button
                    className="navbar-toggler dropdown-toggle bg-transparant border"
                    type="button"
                    value="menu"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </Button>
                </div>
                <div className="collapse navbar-collapse justify-content-end menu" id="navbarNav">
                  <ul className="navbar-nav menu">
                    <Nav.Link className="menu_item"><a href="#ourservisec">Our Services</a></Nav.Link>
                    <Nav.Link className="menu_item"><a href="#whyus">Why Us</a></Nav.Link>
                    <Nav.Link className="menu_item"><a href="#testimonial">Testimonial</a></Nav.Link>
                    <Nav.Link className="menu_item"><a href="#faq">FAQ</a></Nav.Link>
                  </ul>
                  <Button>Register</Button>
                </div>
              </div>
            </nav>
    
            <div className="container">
              <div className="main">
                <div className="row g-0 align-items-center">
                  <div className="col-12 col-md-6 px-2 pe-md-5 cell-1">
                    <div className="main_desc">
                      <h1>Sewa dan Rental Mobil Terbaik di kawasan Surabaya</h1>
                      <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 cell-2">
                    <div className="main_img position-relative mt-3 mt-md-0">
                      <img src={bgcar} className="car_img img-fluid" alt="car" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
