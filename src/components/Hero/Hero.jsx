import ProgressCard from "./ProgressCard";
import ResolvedCard from "./ResolvedCard";


const Hero = () => {
    return (
        <div className="grid grid-cols-2 gap-6 max-w-500 mx-auto  my-10">
            <ProgressCard></ProgressCard>
            <ResolvedCard></ResolvedCard>
        </div>
    );
};

export default Hero;