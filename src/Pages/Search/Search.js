import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../../Komponen/Img/logo.png';
import bgcar from '../../Komponen/Img/img_car.png';
import {Box, Grid, Select, MenuItem, TextField, FormControl, InputLabel, Button} from '@material-ui/core';

import './search.css'

export const Search = () => {
  return (
    <div className='Header'>
      <div className='header container-fluid' id='navigasi'>
        <nav className='navbar nav navbar-expand-lg'>
          <div className='container'>
            <a href='#navigasi'>
              <img src={logo} alt='logo' />
            </a>
            <div className='button btn-info'>
              <button
                className='navbar-toggler dropdown-toggle bg-transparant border'
                type='button'
                value='menu'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>
            <div className='collapse navbar-collapse justify-content-end menu' id='navbarNav'>
              <ul className='navbar-nav menu'>
              <Nav.Link className="menu_item"><a href="#ourservisec">Our Services</a></Nav.Link>
              <Nav.Link className="menu_item"><a href="#whyus">Why Us</a></Nav.Link>
              <Nav.Link className="menu_item"><a href="#whyus">Why Us</a></Nav.Link>
              <Nav.Link className="menu_item"><a href="#faq">FAQ</a></Nav.Link>
              </ul>
              <button>Register</button>
            </div>
          </div>
        </nav>
        
        <div className='container'>
          <div className='main'>
            <div className='row g-0 align-items-center'>
              <div className='col-12 col-md-6 px-2 pe-md-5 cell-1'>
                <div className='main_desc'>
                  <h1>Sewa dan Rental Mobil Terbaik di Kawasan Surabaya</h1>
                  <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
              </div>
              <div className='col-12 col-md-6 cell-2'>
                <div className='main_img position-relative mt-3 mt-md-0'>
                  <img src={bgcar} className='car_img img-fluid' alt='car'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Search' boxshadow={4} style={{display: 'flex', position: "relative", justifyContent: "center", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)"}}>
        <Box
          boxShadow={4}
          borderRadius={8}
          sx={{ flexGrow: 1 }}
          style={{ position: "absolute", top: "-56px", background: "white", width: "80%", display: "flex", padding: "10px", margin: "auto", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}
        >
          <Grid elevation={0} spacing={1} style={{ margin: "10px" }}>
            <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tipe Driver</InputLabel>
            <FormControl sx={{ m: 1 }} size="small" margin="dense" variant="outlined" style={{ borderRadius: 4, width: "200px", borderColor: "#5cb85f" }}>
            <Select id="demo-customized-select-native">
              <MenuItem value={10}>Dengan Sopir</MenuItem>
              <MenuItem value={10}>Tanpa Sopir (Lepas Kunci)</MenuItem>
            </Select>
            </FormControl>
          </Grid>

          <Grid item xs style={{ margin: "10px" }}>
          <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tanggal</InputLabel>
          <TextField
            fullWidth
            size="small"
            margin="dense"
            color="success"
            variant="outlined"
            id="date"
            type="date"
            defaultValue={new Date()}
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </Grid>

          <Grid item xs style={{ margin: "10px" }}>
            <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Waktu Jemput/ Ambil</InputLabel>
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="outlined"
              id="time"
              type="time"
              InputLabelProps={{
              step: 300,
            }}
            sx={{ width: 220 }}
            />
          </Grid>

          <Grid item xs style={{ margin: "10px" }}>
            <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Jumlah Penumpang (Optional)</InputLabel>
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="outlined"
              id="outlined-number"
              defaultValue="0"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ input: { color: "yellow" }, label: { color: "blue" } }}
            />
          </Grid>

          <Grid>
            <Button href={`/car`} variant="contained" style={{ background: "#5cb85f", justifyContent: "center", marginTop: "42px", marginRight: "5px", color: "white" }}>
              Cari Mobil
            </Button>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
