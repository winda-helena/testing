import React, { useState, useEffect} from 'react'
import axios from 'axios';
import logo from '../../Komponen/Img/logo.png'
import Cars from './Cars';
import { Nav } from 'react-bootstrap';
import {Box, Grid, Select, MenuItem, TextField, FormControl, InputLabel, Button, Typography} from '@material-ui/core';


export const Card = () => {
    const [cars, setCars] = useState([]);

    const getCars = async () => {
      const res = await axios.get("https://rent-cars-api.herokuapp.com/customer/car");
      console.log(res);
      setCars(res.data);
    };
    useEffect(() => {
      getCars();
    }, []);
  
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
      </div>
      <br/>
      <br/>
      <br/>
      <div className='Search' boxshadow={4} style={{display: 'flex', position: "relative", justifyContent: "center", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)"}}>
        <Box
          boxShadow={4}
          borderRadius={8}
          sx={{ flexGrow: 1 }}
          style={{ position: "absolute", top: "-56px", background: "white", width: "80%", display: "flex", padding: "10px", margin: "auto", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}
        >
          <div style={{ justifyContent: "flex-start", fontSize: "small"}}>Pencarianmu</div>
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
      <Grid container justifyContent="center">
        {cars ? (
          cars.map((car) => {
            return (
              <Grid elevation={0} spacing={1} item key={car.id}>
                <Cars item={car} />
              </Grid>
            );
          })
        ) : (
          <Typography>Empty List</Typography>
        )}
    </Grid>
    </div>
  );
}