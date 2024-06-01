import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './Movie.jsx'
import Personal from './Personal.jsx'
import Time from './Time.jsx'
import Pet from './Pet.jsx'
import Nav from './Nav.jsx'
import NotFound from './NotFound.jsx'

import { Route, BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';
const skills =
  [
    { name: "PHP" },
    { name: "C++" },
    { name: "C#" },
    { name: "HTML" },
  ]

const pet =
  [
    { photo: "/Kyza1.jpg" },
    { photo: "/Kyza2.jpg" },
    { photo: "/Kyza3.jpg" },
  ]

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Movie movie_name='Месники: Завершення' author_name='Джо Руссо' year={2019} studio='Marvel Studios' poster="/Avengers.jpg" />} />
          <Route path="/personal" element={<Personal name="Григороець Єгор" phone="+380950748746" email="grigorece3@gmail.com" city="Чернівці" experience="Ще не було, навчаюся" skills={skills} photo="/me.jpg" />} />
          <Route path="/time" element={<Time />} />
          <Route path="/pet" element={<Pet pet_name="Кузя" pet_age="10" pet={pet} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
