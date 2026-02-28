
import bookingPNG from '../img/booking.png';

const Booking = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700 text-center mb-2 font-semibold">Booking</h1>
        <p className="text-xl text-amber-700 text-center mb-2">React MUI Express.js JSON Server of the Frontend PRO course</p>
        <div>
          <a href="https://dz34-1booking.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img  src={bookingPNG} alt="bookingPNG" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Booking;
