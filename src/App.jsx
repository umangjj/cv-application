import { useState } from 'react'
import './App.css'
import  EducationSection from './components/Education'
import Experience from './components/Experience'
import GeneralInfo from './components/GeneralInfo'

function App() {

  return (
    <>
      <h1>Resume </h1>
      <GeneralInfo />
      <EducationSection />
    </>
  )
}

export default App
