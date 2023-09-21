import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ActionAreaCard from "./Card";
import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MyCarousel from "./Carousel";

const images = [
  'bg.png',
  'BONUS-indo.jpg',
  'banner-size.jpg',
  'Weekend-Bonus.jpg',
  'SLOT-BONUS.jpg',
];

export default function ButtonAppBar() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "white", color: "black" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1, mt: 1 }}>
            <img src="logo2.png" width={"15%"} style={{ height: "auto" }} alt="" />
          </Typography>
          <Button variant="contained">MASUK</Button>
          <Button variant="contained" color="success" sx={{ ml: 2 }}>
            DAFTAR
          </Button>
        </Toolbar>
      </AppBar>

    {/* images section start */}

      <Carousel
      
      showThumbs={false}
      showStatus={false}
      selectedItem={currentSlide}
      onChange={setCurrentSlide}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>

    {/* images section end */}

        <MyCarousel/>

      {/* <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status (e.g., "3/5")
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false} // Hide the dots/indicators
        
      >
        <div style={{marginTop: "20px", marginBottom: "20px"}}>
          
           

          <Link>
            <img src="RELAX GAMING.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 2"  />
          </Link>

          <Link>
            <img src="RED TIGER.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 3" />
          </Link>

          <Link>
            <img src="PRAGMATIC PLAY.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 4" />
          </Link>

          <Link>
            <img src="PLAYTECH.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 5" />
          </Link>

          <Link>
            <img src="PGSOFT.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 6" />
          </Link>

          <Link>
            <img src="NETENT.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 7" />
          </Link>

          <Link>
            <img src="HABANERO.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 8" />
          </Link>

          <Link>
            <img src="JILI.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 9" />
          </Link>
        </div>
        <div style={{marginTop: "20px", marginBottom: "20px"}}>
          <Link>
            <img src="JDB.png" style={{ width: "10%", margin: "5px", padding: "8px", border: "1px solid black", borderRadius: "8px" }} height={"auto"} alt="Image 10" />
          </Link>
        </div>
      </Carousel> */}
      <ActionAreaCard />
    </Box>
  );
}
