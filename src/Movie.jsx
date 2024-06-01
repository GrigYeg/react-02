import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Movie({ movie_name, author_name, year, studio, poster }) {

  return (
    <>
      <h2>Фільм: {movie_name}</h2>
      <h4>Режисер: {author_name}</h4>
      <h4>Рік: {year}</h4>
      <h4>Кіностудія: {studio}</h4>
      <img src={poster} width={400} height={500 } />
    </>
  )
}

export default Movie