import { useSelector } from 'react-redux';
import hotelsSelector from '../../redux/hotels/selectors';

const Hotels = () => {
  const hotels = useSelector(hotelsSelector.items);
  const loading = useSelector(hotelsSelector.loading);
  
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hotels</h1>

      {hotels.map(hotel => (
        <div key={hotel.id}>
          <strong>{hotel.name}</strong>
          <div>{hotel.city}</div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;