import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Personal({ name, phone, email, city, experience, skills, photo }) {

  return (
    <>
      <h2>{name}</h2>
      <h4>Телефон: {phone}</h4>
      <h4>Email: {email}</h4>
      <h4>Місто: {city}</h4>
      <h4>Досвід роботи: {experience}</h4>
      <div>
        <h4>Навички:</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <img src={photo}/>
    </>
  )
}

export default Personal