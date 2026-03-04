import {use} from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({coustomerTickets}) => {
    const tickets = use(coustomerTickets)
    console.log(tickets);
    return (
        <>
        <div className="flex gap-4 my-5 max-w-500 mx-auto">
                <h1 className="w-9/12 text-[#34485A] text-2xl">Customer Tickets</h1>
                <h2 className="w-3/12 text-[#34485A] text-2xl">Task Status</h2>

            </div>
        
        <div className="max-w-500 mx-auto flex gap-4">
            
            <div className="w-9/12 grid grid-cols-2 gap-2">
                {
                    tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket}></Ticket>)
                }
                
            </div>
            <div className="w-3/12">

                <h2 className="text-[#627382]">Select a ticket to add Task Status</h2>
                <div>
                    <h2 className="text-2xl my-4 text-[#34485A] font-semibold">Resolved Task</h2>
                    <p>No resolved task yet</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Tickets;