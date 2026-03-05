import ProgressCard from "./ProgressCard";
import ResolvedCard from "./ResolvedCard";


const Hero = ({countProgress, resolved}) => {
    return (
        <div className="grid mx-2 md:grid-cols-2  gap-6 max-w-500 lg:mx-auto  my-10">
            <ProgressCard countProgress={countProgress}></ProgressCard>
            <ResolvedCard resolved={resolved}></ResolvedCard>
        </div>
    );
};

export default Hero;