import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardExample() {
  return (
    <>
    <Typography variant='h2'>This is Card component</Typography>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg"
        title="Sports Car"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ferrari 488
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          The Ferrari 488 is a high-performance sports car with a turbocharged V8 engine, offering exceptional speed and handling.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
    </>
  );
}
