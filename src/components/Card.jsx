import propTypes from 'prop-types';

export default function Card({ name, krName, img }) {
  return (
    <div className='w-48 h-48 border-solid border border-1'>
      <img className='scale-75' src={img} alt={name}></img>
      <div className="">{name}</div>
      <div className="text-lg">{krName}</div>
    </div>
  );
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  krName: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};
