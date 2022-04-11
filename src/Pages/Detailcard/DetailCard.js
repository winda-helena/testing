import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import logo from '../../Komponen/Img/logo.png';
import { Nav } from "react-bootstrap";
import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
import { Box, Grid, InputLabel, makeStyles, FormControl, Select, MenuItem, TextField, Button, CardActionArea, Card, CardContent, CardActions, CardMedia, Typography } from "@material-ui/core";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  detailCard: {
    background: "white",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function DetailCard() {
  const { carId } = useParams();

  const [item, setItem] = useState();

  const getCarData = async () => {
    const res = await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${carId}`);

    setItem(res.data);
  };

  useEffect(() => {
    getCarData();
  }, [item]);

  const classes = useStyles();
  return (
    <div className="Header">
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
      <div className={classes.detailCard}>
        <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
          <Card item={true} style={{ width: "60%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Tentang Paket
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Include
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Exclude
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Typography>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Refund, Reschedule, Overtime
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{ width: "32%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardMedia component="img" image={item?.image} alt="green iguana" style={{ padding: "10px" }} />
              <CardContent>
                <Typography variant="h6" component="div" style={{ paddingBottom: "8px" }}>
                  {item?.name}
                </Typography>
                <Typography style={{ display: "flex", color: "grey" }}>
                  <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                    <PeopleOutline /> 4 Orang &nbsp;
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                    <SettingsOutlined /> {item?.category} &nbsp;
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                    <CalendarTodayOutlined /> Tahun 2020 &nbsp;
                  </Typography>
                </Typography>

                <Typography style={{ display: "flex" }}>
                  <Typography style={{ paddingTop: "40px" }}>Total </Typography>
                  <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingTop: "40px", marginLeft: "188px" }}>
                    Rp {item?.price.toLocaleString("id-ID")}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" style={{ background: "#5CB85F", color: "white" }} fullWidth>
                Pilih Mobil
              </Button>
            </CardActions>
          </Card>
        </div>
        <Button variant="contained" style={{ background: "#5CB85F", color: "white" }}>
          Lanjutkn Pembayaran
        </Button>
      </div>
    </div>
      
  );
}