import React from 'react'
import Rating from './Rating'

const RatingList = () => {
    
        const movies = [
          { id: 'tt0113243', title: 'Hackers', releaseDate: '1995-09-15', rating: 6.2 },
          { id: 'tt0244244', title: 'Swordfish', releaseDate: '2001-05-11', rating: 6.5 },
          { id: 'tt0086567', title: 'WarGames', releaseDate: '1983-06-03', rating: 7.1 },
          { id: 'tt0133093', title: 'The Matrix', releaseDate: '1999-03-24', rating: 8.7 },
          { id: 'tt0151804', title: 'Office Space', releaseDate: '1999-02-19', rating: 7.7 },
          
        ];
        let totalRating = 0

  return (
    <>
      {movies.map((movie) => {
        totalRating +=  movie.rating
        return <Rating
         moviese = {movie}
        />

})}
       totalRating = {totalRating/movies.length}
      {/* {movies.map((movie) => (
        <Rating
          key={movie.id}
          title={movie.title}
          year={movie.releaseDate}
          rating={movie.rating}
        />
      ))} */}
    </>
  )
}

export default RatingList