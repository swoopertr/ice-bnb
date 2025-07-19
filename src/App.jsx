import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import RealismButton from './components/Buttons/RealismButton';

function App() {
  return (
    <>
      <div className="typography-h1 text-primary">Hello world</div>
      <Button variant="contained">Hello world</Button>
      <RealismButton/>
    </>
  )
}

export default App
