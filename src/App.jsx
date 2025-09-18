import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res =>res.json())

function App() {

  return (
    <>
      <h1>CountryLand</h1>
      <Suspense fallback={<p>Countries are coming</p>}>
          <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
