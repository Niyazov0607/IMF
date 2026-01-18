import Clarity from "../Clarity/clarity";
import Finance from "../Finance/finance";
import Plan from "../Plan/plan";

const HomePage = () => {
    return (
        <div className="w-full">
            <Finance />
            <Clarity />
            <Plan />
        </div>
    );
};

export default HomePage;
