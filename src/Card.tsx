import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const cardData = [
  {
    id: 1,
    title: 'Jam Gacor 1',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 2,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 3,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 4,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 4,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 4,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 4,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 4,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 4,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  },
  {
    id: 4,
    title: 'Jam Gacor 2',
    time: "10:14 - 13:48",
    description: 'Pola',
    image: 'card.png',
    load: "loading.png"
  }
  // Add more card data objects as needed
];

export default function ActionAreaCard() {
  return (
    <div>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "10px"}}>
      {cardData.map((card) => (
        <div>
        <Card key={card.id} style={{width: "250px", margin: "10px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="caption" style={{ textAlign: 'center' }} component="div">
                {card.title}
              </Typography>
              <Typography gutterBottom variant="caption" style={{ textAlign: 'center' }} component="div">
                {card.time}
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'center' }} color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            
          </CardActionArea>
        </Card>
        <div style={{marginTop: "10px"}}>
            <CardMedia
              component="img"
              height="auto"
              image={card.load}
              alt={card.title}
              style={{width:"93%", marginLeft:"8px"}}
              
            />
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}
