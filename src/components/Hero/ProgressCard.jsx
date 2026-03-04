import vectorForCard1 from "../../assets/vector1.png"
const ProgressCard = () => {
  return (
    <div className=" bg-linear-to-l font-bold from-[#9F62F2] to-[#632EE3] flex items-center justify-between  text-center text-white rounded-lg">
        <div>
            <img src={vectorForCard1} alt="" />
        </div>
      <div>
        <p className="text-3xl font-bold">In-Progress</p>
        <p className="text-4xl font-bold mt-3">0</p>
      </div>
      <div>
        <img className=" transform -scale-x-100" src={vectorForCard1} alt="" />
      </div>
    </div>
  );
};

export default ProgressCard;
