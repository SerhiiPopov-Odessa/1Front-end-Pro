
import bookingPNG from '../img/booking.png';

const Booking = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8 shadow-lg shadow-amber-400/50">Booking</h1>
        <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl  mb-4 shadow-lg shadow-lime-300/50">React MUI TanStackQuery Express.js JSON Server </p>
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
