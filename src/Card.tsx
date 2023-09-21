import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import LinearProgress from "@mui/material/LinearProgress";

const cardData = [
  {
    id: 1,
    title: "Jam Gacor 1",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "#ffc107",
    progressValue: 45
  },
  {
    id: 2,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "green",
    progressValue: 70
  },
  {
    id: 3,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "green",
    progressValue: 70
  },
  {
    id: 4,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "green",
    progressValue: 90
  },
  {
    id: 5,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "#ffc107",
    progressValue: 45
  },
  {
    id: 6,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "green",
    progressValue: 70
  },
  {
    id: 7,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "green",
    progressValue: 70
  },
  {
    id: 8,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "#ffc107",
    progressValue: 45
  },
  {
    id: 9,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "#ffc107",
    progressValue: 45
  },
  {
    id: 10,
    title: "Jam Gacor 2",
    time: "10:14 - 13:48",
    description: "Pola",
    image: "card.png",
    value: "10",
    value2: "20",
    value3: "70",
    color: "#ffc107",
    progressValue: 45
  },

  // Add more card data objects as needed
];

export default function ActionAreaCard() {
  return (
    <div>
      <div style={{ background: "black" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "10px",
            padding: "8px",
          }}
        >
          {cardData.map((card) => (
            <div key={card.id}>
              <Card style={{ width: "270px", margin: "10px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent style={{ background: card.color }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        textAlign: "center",
                        margin: "0px",
                        fontWeight: "bold",
                      }}
                      component="div"
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        textAlign: "center",
                        margin: "0px",
                        fontWeight: "bold",
                      }}
                      component="div"
                    >
                      {card.time}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      {card.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        fontWeight: "bold",
                      }}
                      color="text.secondary"
                    >
                      {card.value}
                      <DoneIcon style={{ marginTop: "5px" }} />
                      <CloseIcon style={{ marginTop: "5px" }} />
                      <DoneIcon style={{ marginTop: "5px" }} />
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        fontWeight: "bold",
                      }}
                      color="text.secondary"
                    >
                      {card.value2}
                      <DoneIcon style={{ marginTop: "5px" }} />
                      <CloseIcon style={{ marginTop: "5px" }} />
                      <DoneIcon style={{ marginTop: "5px" }} />
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        fontWeight: "bold",
                      }}
                      color="text.secondary"
                    >
                      {card.value3}
                      <DoneIcon style={{ marginTop: "5px" }} />
                      <CloseIcon style={{ marginTop: "5px" }} />
                      <DoneIcon style={{ marginTop: "5px" }} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <div
                style={{
                  marginTop: "18px",
                  marginBottom: "15px",
                  marginLeft: "9px",
                  position: "relative",
                }}
              >
                <LinearProgress
                  style={{ height: "20px", borderRadius: "5px", width: "96%" }}
                  variant="determinate"
                  value={card.progressValue}
                />
                <Typography
                  variant="body2"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "black",
                  }}
                >
                  {`${card.progressValue}%`}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <img src="0_8005.png" style={{ width: "20%" }} />
          <Typography
            variant="h6"
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            Copyright 2023
            <Typography variant="h6" style={{ color: "red" }}>
              RTP Live | Bocorn RTO Slot Hari Ini | RTP Live Slot Tetranggi
              Paling Gacor.
            </Typography>
            <Typography variant="h6" style={{ color: "white" }}>
              All right reserved.
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}
