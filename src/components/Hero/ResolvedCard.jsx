import vectorForCard1 from "../../assets/vector1.png"


const ResolvedCard = ({resolved}) => {
  console.log(resolved);
    return (
         <div className=" bg-linear-to-l font-bold from-[#00827A] to-[#54CF68] flex items-center justify-between  text-center text-white rounded-lg">
                 <div>
                    <img className="max-w-full " src={vectorForCard1} alt="" />
                 </div>
               <div>
                 <p className="text-3xl font-bold">Resolved</p>
                 <p className="text-4xl font-bold mt-3">{resolved.length}</p>
               </div>
               <div>
                <img className="max-w-full transform -scale-x-100" src={vectorForCard1} alt="" />
               </div>
             </div>
    );
};

export default ResolvedCard;