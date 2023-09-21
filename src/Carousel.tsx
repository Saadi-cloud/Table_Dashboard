import { useState } from "react";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

function MyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(0);
  const data = [
    { id: 1, image: "RELAX GAMING.png", title: "Relaxing gaming experience" },
    { id: 2, image: "RED TIGER.png", title: "Fantastic game" },
    {
      id: 3,
      image: "PRAGMATIC PLAY.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 4,
      title: "Relaxing gaming experience",
      image: "PRAGMATIC PLAY.png",
    },
    {
      id: 5,
      image: "PLAYTECH.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 6,
      image: "PGSOFT.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 7,
      image: "NETENT.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 8,
      image: "JILI.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 9,
      image: "JDB.png",
      title: "Relaxing gaming experience"
    },
    {
      id: 10,
      image: "HABANERO.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 11,
      image: "HABANERO.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 12,
      image: "HABANERO.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 13,
      image: "HABANERO.png",
      title: "Relaxing gaming experience",
    },
    {
      id: 14,
      image: "HABANERO.png",
      title: "Relaxing gaming",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <>
      
        <div style={{ display: "flex", alignItems: "center", marginTop: "30px", marginBottom: "30px" }}>
          <Grid
            item
            md={1}
            style={{
              alignItems: "left",
              zIndex: "2",
            }}
          >
            <Button
              onClick={handlePrevClick}
              style={{ background: "white", padding: "32px" }}
            >
              <ChevronLeft />
            </Button>
          </Grid>

          <Grid
            item
            md={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", width: "100%", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  transform: `translateX(-${currentIndex * 10}%)`,
                  transition: "transform 0.5s ease-in-out",
                  
                }}
              >
                {data.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={`Image ${index}`}
                    onClick={() => setText(item.id)}
                    style={{
                      width: "10%",
                      margin: "5px",
                      padding: "8px",
                      border: `1px solid ${
                        item.id === text ? "red" : "black"
                      }`,
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          </Grid>

          <Grid
            item
            md={1}
            style={{
              textAlign: "right",
              zIndex: "2",
            }}
          >
            <Button
              onClick={handleNextClick}
              style={{ background: "white", padding: "32px" }}
            >
              <ChevronRight />
            </Button>
          </Grid>
        </div>
      
      {data.map((item) => (
        <div>{item.id == text && <h1 style={{textAlign: "center"}}>{item.title}</h1>}</div>
      ))}
    </>
  );
}

export default MyCarousel;
