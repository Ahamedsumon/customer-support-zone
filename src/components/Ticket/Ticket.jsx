

const Ticket = ({ticket}) => {
    const {title, description, status, id, priority, customer, createdAt} = ticket
 
    return (
        <>
        <div className="bg-white p-2 rounded-sm shadow">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#001931]">{title}</h2>
                <p className=" bg-[#B9F8CF] px-2  rounded-3xl"><span><i className="fa-solid fa-circle text-xs text-[#02A53B] mr-1"></i></span>{status}</p>
            </div>
            <p className="max-w-114 my-3 text-[#627382]">{description}</p>
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <p className="text-[#627382] text-sm">#{id}</p>
                    <p className="text-[#F83044] text-sm font-bold">{priority}</p>
                </div>
                <div className="flex gap-5">
                    <h3 className="text-[#627382] text-sm">{customer}</h3>
                    <p className="text-[#627382] text-sm"><span><i className="fa-regular fa-calendar-days mr-2"></i></span>{createdAt}</p>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Ticket;