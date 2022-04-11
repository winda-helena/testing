import React from "react";
import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
import { Box, Button, CardActionArea, Card, CardContent, CardActions, CardMedia, Typography } from "@material-ui/core";

const Cars = ({ item }) => {
  return (
    <div className="Card" boxShadow={4} style={{ display: "flex", paddingTop: "100px", marginRight: "35px" }}>
      <Box p={3} mx={3} borderRadius={1} boxShadow="0px 0px 4px rgba(0, 0, 0, 0.15)" style={{ width: "330px" }}>
        <CardActionArea boxShadow={4} style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}>
          <CardMedia component="img" image={item.image} alt={item.name} style={{ padding: "10px", borderColor: "black" }} />
          <CardContent>
            <Typography variant="p" component="div" style={{ paddingBottom: "8px" }}>
              {item.name}
            </Typography>
            <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
              Rp. {item.price.toLocaleString("id-ID")} / hari
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
              <PeopleOutline /> &nbsp;&nbsp;4 Orang
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
              <SettingsOutlined /> &nbsp;&nbsp;{item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlined /> &nbsp;&nbsp;Tahun 2020
            </Typography>
            <Button href={`/car/${item.id}`} variant="contained" fullWidth style={{ background: "#5cb85f", color: "white", marginTop: "8px" }}>
              <Typography as="p" my={1} variant="bodyBold" textTransform="Capitalize">
                Pilih Mobil
              </Typography>
            </Button>
          </CardContent>
        </CardActionArea>
      </Box>
    </div>
  );
};

export default Cars;
