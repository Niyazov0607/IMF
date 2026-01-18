import Clarity from "../Clarity/clarity";
import Client from "../Clients/client";
import Finance from "../Finance/finance";
import Plan from "../Plan/plan";

const HomePage = () => {
    return (
        <div className="w-full">
            <Finance />
            <Clarity />
            <Plan />
            <Client />
        </div>
    );
};

export default HomePage;
