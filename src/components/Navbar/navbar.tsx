import { NavLink } from "react-router";
import LogoImg from "../../assets/logois.svg";
import ArrorRightIcon from "../../assets/Vector.svg";
import Hero from "../Hero/hero";
import BgVideo from "../../assets/vidoe.mp4";

const Navbar = () => {
    return (
        <div className="relative w-full h-screen min-h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={BgVideo} type="video/mp4" />
            </video>

            <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                style={{
                    background: `
                        linear-gradient(252.44deg, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.9) 100%),
                        linear-gradient(287.46deg, rgba(255, 255, 255, 0.6) 1.08%, rgba(255, 255, 255, 0) 100%),
                        radial-gradient(85.38% 270.12% at 0% 50%, #50D998 0%, #31B178 35%, #068D6A 75%, #03643D 100%)
                    `,
                    backgroundBlendMode: "hue",
                    mixBlendMode: "color-dodge",
                }}
            />

            <div className="relative z-20 w-360 max-w-full m-auto p-5">
                <div className="flex items-center justify-between">
                    <NavLink to="/">
                        <img src={LogoImg} alt="logo" />
                    </NavLink>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8 cursor-pointer">
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/homework">How we work</NavLink>
                            <NavLink to="/price">Pricing</NavLink>
                            <NavLink to="/faq">FAQ</NavLink>
                        </ul>
                    </nav>

                    <button className="flex items-center gap-3 border border-[#100E0E26] rounded-[25px] py-2 pr-2 pl-4 cursor-pointer">
                        Log in
                        <img
                            className="bg-[radial-gradient(85.38%_270.12%_at_0%_50%,#50D998_0%,#31B178_35%,#068D6A_75%,#03643D_100%)]
                            py-[9.5px] px-2 rounded-2xl"
                            src={ArrorRightIcon}
                            alt="right"
                        />
                    </button>
                </div>

                <Hero />
            </div>
        </div>
    );
};

export default Navbar;
