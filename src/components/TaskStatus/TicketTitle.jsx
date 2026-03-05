

const TicketTitle = ({ticket, handleCompleteBtn}) => {
    return (
        <div className="w-full bg-white p-3 mb-2 rounded-lg">
            <h3>{ticket.title}</h3>
            <button onClick={() => handleCompleteBtn(ticket)} className="btn bg-[#02A53B] w-full text-white mt-2">Complete</button>
        </div>
    );
};

export default TicketTitle;