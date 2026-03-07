
import {Suspense, useState, useMemo} from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';


 const ticketsPromise = async() =>{
    const res = await fetch("/customers.json")
    const data = await res.json();
    return data
  }
  
function App() {
  // const coustomerTickets = ticketsPromise()
  const coustomerTickets =  useMemo(() => ticketsPromise(), []);
 const [ticketTittle, setTicketTittle] =useState([]);
 const [countProgress, setCountProgress] = useState(0);
 const [resolved, setresolved] = useState([])
 const [progressStatus, setProgressStatus] = useState(false)
const [ticketsId, setTicketId] = useState([])
const [ticketStatus, setTicketStatus] = useState([])
   
    // const [counProgress, setCountProgress] = useState(0)
    const handleTicketClick = (ticket) =>{
      const newTicket = [...ticketTittle, ticket];
      setTicketTittle(newTicket)
      setCountProgress(countProgress => countProgress + 1)
      setProgressStatus(true)
      notify()
      setTicketStatus([...ticketStatus, ticket.id])
      
}

  const handleCompleteBtn = (ticket) => {
    console.log('task to be added in the resolve section', ticket);
    const filterTask = ticketTittle.filter(task => task.id !== ticket.id);
    setTicketTittle(filterTask)
    const newResolve = [...resolved, ticket];
    setresolved(newResolve)
    setCountProgress(countProgress => countProgress - 1)
    setTicketId([...ticketsId, ticket.id])
    completedToastify()
  }

  
  const notify = () => toast('The ticket has been added successfully');
  const completedToastify = () => toast("The ticket has been resolved") 


  const getOneByOneTicketId = ticketsId.map(ticketId => ticketId);
  console.log(getOneByOneTicketId);
  return (
    <>
      <Navbar></Navbar>
      <Hero countProgress={countProgress} resolved={resolved}></Hero>
      <ToastContainer />
      <Suspense fallback={<p>Data is loading...</p>}>
        <Tickets ticketsId={ticketsId} coustomerTickets={coustomerTickets} handleTicketClick={handleTicketClick} ticketTittle={ticketTittle} handleCompleteBtn={handleCompleteBtn} resolved={resolved} progressStatus={progressStatus} ticketStatus={ticketStatus} ></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
