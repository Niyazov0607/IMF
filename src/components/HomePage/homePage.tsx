import Clarity from "../Clarity/clarity";
import Finance from "../Finance/finance";

const HomePage = () => {
    return (
        <div className="w-full">
            <Finance />
            <Clarity />
        </div>
    );
};

export default HomePage;
