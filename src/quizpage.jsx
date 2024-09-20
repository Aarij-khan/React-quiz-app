import React from 'react'
import { useLocation } from 'react-router-dom'
function Quizpage() {

    const state = useLocation()
    console.log("🚀 ~ Quizpage ~ state:", state)
  return (

    <div>Quizpage</div>
  )
}

export default Quizpage