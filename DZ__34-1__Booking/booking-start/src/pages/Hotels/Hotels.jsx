import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import hotelsSelector from '../../redux/hotels/selectors';

const Hotels = () => {
  const hotels = useSelector(hotelsSelector.items);
  const loading = useSelector(hotelsSelector.loading);

  if (loading) return <div>Loading...</div>;

  return (
    <div>

      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        {hotels.length > 0 ? hotels[0].city : "Hotels"}
      </Typography>


      <Grid container spacing={2} justifyContent="center">
        {hotels.length === 0 && (
          <Typography variant="h6">
            There are no available hotels matching your request.
          </Typography>
        )}

        {hotels.map(hotel => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={hotel.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

              <CardMedia
                sx={{ height: 140, backgroundColor: '#eee' }}
                component="img"
                loading="lazy"
                height="140"
                image={hotel.image || '/placeholder.jpg'}
                alt={hotel.name}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  {hotel.name}
                </Typography>

                <Typography variant="body2" component="div" color="text.secondary">
                  {Object.entries(hotel).map(([key, value]) =>
                    value != null && key !== 'id' && key !== 'image' && key !== 'destination' ? (
                      <div key={key}>
                        <strong>{key}:</strong> {String(value)}
                      </div>
                    ) : null
                  )}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Hotels;
