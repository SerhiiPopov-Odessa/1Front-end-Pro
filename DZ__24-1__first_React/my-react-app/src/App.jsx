import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <h1>SWAPI</h1>
        <form action="https://swapi.dev/api" className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
            <input type="text" name="url" className="form-control js--swapi_input" id="basic-url" placeholder="people/1/"
                aria-describedby="basic-addon3" />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
                Get info
            </button>
        </form>
        <div className="card">
            <div className="card-body">
                <span className="badge d-none bg-secondary">people</span>
                <span className="badge d-none bg-secondary">1</span>
                <div className="load d-none ">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <pre className="mt-2 mb-0"></pre>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
