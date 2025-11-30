import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'


function App() {
    return (
        <>
            <div className="container">
                <h1>SWAPI</h1>
                <Form />
                <Card />
            </div>
        </>
    )
}

export default App
