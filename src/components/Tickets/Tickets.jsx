import {use} from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolveTask from "../TaskStatus/ResolveTask/ResolveTask";


const Tickets = ({coustomerTickets, handleTicketClick, ticketTittle, handleCompleteBtn, resolved, progressStatus, ticketsId, ticketStatus}) => {
//     const [ticketTittle, setTicketTittle] = useState([])
//     const [counProgress, setCountProgress] = useState(0)
//     const handleTicketClick = (ticket) =>{
    
//     const newTicket = [...ticketTittle, ticket];
//     setTicketTittle(newTicket)
// }
    
     
    const tickets = use(coustomerTickets)
    const filterTickets = tickets.filter(ticket => !ticketsId.includes(ticket.id));
  
    // const filterTicketById = tickets.filter(ticket => ticket.id !== ticketId)
    return (
        <>
        <div className="flex gap-4 my-5 max-w-500 mx-auto">
                <h1 className="w-9/12 text-[#34485A] text-2xl">Customer Tickets</h1>
                <h2 className="w-3/12 text-[#34485A] text-2xl">Task Status</h2>

            </div>
        
        <div className="max-w-500 mx-auto flex flex-col lg:flex-row gap-4">
            
            <div className="lg:w-9/12 grid lg:grid-cols-2 gap-2">
                {
                    filterTickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} handleTicketClick={handleTicketClick} progressStatus={progressStatus} ticketStatus={ticketStatus}></Ticket>)
                }
                
            </div>
            <div>
                <TaskStatus ticketTittle={ticketTittle} handleCompleteBtn={handleCompleteBtn}></TaskStatus>
                <ResolveTask resolved={resolved}></ResolveTask>
                
            </div>
        </div>
        </>
    );
};

export default Tickets;