
import {Suspense, useState} from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';

 const ticketsPromise = async() =>{
    const res = await fetch("../public/customers.json")
    const data = await res.json();
    return data
  }
  const coustomerTickets = ticketsPromise()
function App() {
 const [ticketTittle, setTicketTittle] =useState([]);
 const [countProgress, setCountProgress] = useState(0);
 const [resolved, setresolved] = useState([])
 const [progressStatus, setProgressStatus] = useState(false)
const [ticketId, setTicketId] = useState([])

   
    // const [counProgress, setCountProgress] = useState(0)
    const handleTicketClick = (ticket) =>{
      const newTicket = [...ticketTittle, ticket];
      setTicketTittle(newTicket)
      setCountProgress(countProgress => countProgress + 1)
      setProgressStatus(true)
      notify()
}

  const handleCompleteBtn = (ticket) => {
    console.log('task to be added in the resolve section', ticket);
    const filterTask = ticketTittle.filter(task => task.id !== ticket.id);
    setTicketTittle(filterTask)
    const newResolve = [...resolved, ticket];
    setresolved(newResolve)
    setCountProgress(countProgress => countProgress - 1)
    setTicketId(ticket.id)
    completedToastify()

  }

  
  const notify = () => toast('The ticket has been added successfully');
  const completedToastify = () => toast("The ticket has been resolved") 
  
  return (
    <>
      <Navbar></Navbar>
      <Hero countProgress={countProgress} resolved={resolved}></Hero>
      <ToastContainer />
      <Suspense fallback={<p>Data is loading...</p>}>
        <Tickets ticketId={ticketId} coustomerTickets={coustomerTickets} handleTicketClick={handleTicketClick} ticketTittle={ticketTittle} handleCompleteBtn={handleCompleteBtn} resolved={resolved} progressStatus={progressStatus}></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
