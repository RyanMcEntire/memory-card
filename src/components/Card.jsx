/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import '../index.css';

export default function Card({ name, krName, img, manageTurn }) {
  return (
    <div className="flex flex-col w-50 h-90 bg-lightBrown rounded-2xl" onClick={manageTurn}>
      <img
        className="m-2 self-center max-h-64 rounded-lg"
        src={img}
        alt={name}
      ></img>
      <div className='text-white m-1'>
        <div className="text-center ">{name}</div>
        <div className="text-center text-lg">{krName}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  krName: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};
