import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ImageCarousel from "../Common/ImageCarousel/ImageCarousel";

export default function HomeCardBnb({ item }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <ImageCarousel />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.address.city} - {item.address.street}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Owner: {item.owner.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            price: {item.price.amount} {item.price.currency}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

// {
//     "id": "733d8be6-5708-4551-b221-5c1156fd2b9a",
//     "email": "gamble@.directory",
//     "type": "home",
//     "username": "Holt_Meadows",
//     "address": {
//       "city": "Tryon",
//       "street": "Moffat Street"
//     },
//     "owner": {
//       "id": "7ea5c7ee-7c25-411a-b874-6ea07a7eef84",
//       "name": "Faith Douglas",
//       "image": "https://picsum.photos/id/1/50/50"
//     },
//     "image": [
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300",
//       "https://picsum.photos/id/1/200/300"
//     ],
//     "description": "in non aute officia ad occaecat minim qui ex minim",
//     "price": {
//       "currency": "TR",
//       "amount": 2756
//     },
//     "location": {
//       "lat": 41.618268689797176,
//       "long": 29.68589363075304
//     },
//     "rate": 4
//   },
