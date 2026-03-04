
import {Suspense} from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'

function App() {
 
  const ticketsPromise = async() =>{
    const res = await fetch("../public/customers.json")
    const data = await res.json();
    return data
  }
  const coustomerTickets = ticketsPromise()
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<p>Data is loading...</p>}>
        <Tickets coustomerTickets={coustomerTickets}></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
