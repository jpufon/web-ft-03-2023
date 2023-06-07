import React from 'react';


const Rating = ({ moviese }) => {
  return (
    <div className="movie-card">
      <h3>title: {moviese.title}</h3>
      <p>Year: {moviese.year}</p>
      <h5>rating: {moviese.rating}</h5>
    </div>
  );
};
// const Rating = ({ title, year, rating }) => {
//   return (
//     <div className="movie-card">
//       <h3>title: {title}</h3>
//       <p>Year: {year}</p>
//       <h5>rating: {rating}</h5>
//     </div>
//   );
// };

export default Rating;