import { Route, Routes } from "react-router";
import Navbar from "../components/Navbar/navbar";
import HomePage from "../components/HomePage/homePage";

const MainRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default MainRouter;
