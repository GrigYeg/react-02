import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Pet({pet, pet_name, pet_age}) {
  return (
    <>
      <h2>Мій домашній улюбленець:  {pet_name}</h2>
      <h4>{pet_age} років</h4>
      {pet.map((pet, index) => (
        <div key={index}>
          <img src={pet.photo}/>
        </div>
      ))}
    </>
  )
}


export default Pet