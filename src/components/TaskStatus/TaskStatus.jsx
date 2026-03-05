import TicketTitle from "./TicketTitle";


const TaskStatus = ({ticketTittle, handleCompleteBtn}) => {
    
    return (
        <div>
           {
            ticketTittle < 1 && "Select a ticket to add Task Status"
           }
            {
                ticketTittle.map(ticket =><TicketTitle key={ticket.id} ticket={ticket} handleCompleteBtn={handleCompleteBtn}></TicketTitle>)
            }
        </div>
    );
};

export default TaskStatus;