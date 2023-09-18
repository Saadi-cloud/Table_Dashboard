import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Paper from '@mui/material/Paper';
import ActionAreaCard from './Card';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"white", color:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1, mt: 1 }}>
            <img src="logo2.png" width={"15%"} style={{ height: 'auto'}} alt="" />
          </Typography>
          <Button variant="contained">Login</Button>
          <Button variant='contained' color="success" sx={{ml: 2}}>Sign in</Button>
        </Toolbar>
      </AppBar>
      <img src="bg.png" width={"100%"} height={"auto"} alt="" />
      <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status (e.g., "3/5")
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false} // Hide the dots/indicators
    >
      <div>
        <img src="logo2.png" style={{width: "15%", margin: "5px", border: "1px solid black"}} height={"auto"}  alt="Image 1" />
      
        <img src="logo2.png" style={{width: "15%", margin: "5px", border: "1px solid black"}} height={"auto"} alt="Image 2" />
      
        <img src="logo2.png" style={{width: "15%", margin: "5px", border: "1px solid black"}} height={"auto"} alt="Image 3" />
      
        <img src="logo2.png" style={{width: "15%", margin: "5px", border: "1px solid black"}} height={"auto"} alt="Image 4" />
      
        <img src="logo2.png" style={{width: "15%", margin: "5px", border: "1px solid black"}} height={"auto"} alt="Image 5" />
        
        <img src="logo2.png" style={{width: "15%", margin: "5px", border: "1px solid black"}} height={"auto"} alt="Image 6" />
        </div>
      <div>
        <img src="logo2.png" style={{width: "15%"}} height={"auto"} alt="Image 7" />
      </div>
    </Carousel>
    <ActionAreaCard/>
    </Box>
  );
}
