import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState, useContext } from "react";
import Filter from "../filter/Filter";
import Favorite from "../favorite/Favorite";
import { useLocation, useParams } from "react-router-dom";

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openFavoriteDrawer, setOpenFavoriteDrawer] = useState(false);
  const location=useLocation()
  const id= !!location.pathname.slice(1)
  return (
    <Box sx={{ flexGrow: 1 , marginBottom:"20px"}}>
      <AppBar position="static" sx={{ backgroundColor: "#a8adb5" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: id?"end":"space-between",
          }}
        >
          <Box
            sx={{
              display: id?"none":"flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: {xs:1,sm:2} }}
              onClick={() => {setOpenDrawer(true);setOpenFavoriteDrawer(false)}}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6">Filter Menu</Typography>
            <Drawer anchor={"left"} open={openDrawer} variant="persistent">
              <Filter setOpenDrawer={setOpenDrawer} />
            </Drawer>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Favorite List</Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              sx={{ ml: {xs:1,sm:2} }}
              onClick={() => {setOpenFavoriteDrawer(true); setOpenDrawer(false)}}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={openFavoriteDrawer}
              variant="persistent"
            >
              <Favorite setOpenFavoriteDrawer={setOpenFavoriteDrawer}/>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
