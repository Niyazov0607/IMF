import { useState } from "react";
import { NavLink } from "react-router";
import LogoImg from "../../assets/logois.svg";
import ArrorRightIcon from "../../assets/Vector.svg";
import Hero from "../Hero/hero";
import BgVideo from "../../assets/vidoe.mp4";
import { Twirl } from "hamburger-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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

            <div
                className="relative z-20 w-360 max-w-full m-auto p-5"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
                <div className="flex items-center justify-between">
                    <NavLink to="/">
                        <img src={LogoImg} alt="logo" />
                    </NavLink>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {[
                                { to: "/about", label: "About Us" },
                                { to: "/homework", label: "How we work" },
                                { to: "/price", label: "Pricing" },
                                { to: "/faq", label: "FAQ" },
                            ].map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className="text-black transition-all duration-300
                                    hover:-translate-y-1 hover:text-green-400
                                    hover:drop-shadow-[0_4px_10px_rgba(39,161,103,0.6)]"
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </ul>
                    </nav>

                    <button className="hidden md:flex items-center gap-3 border border-[#100E0E26] rounded-[25px] py-2 pr-2 pl-4 hover:bg-[#32946819] duration-300">
                        Log in
                        <img
                            src={ArrorRightIcon}
                            alt="right"
                            className="bg-[radial-gradient(85.38%_270.12%_at_0%_50%,#50D998_0%,#31B178_35%,#068D6A_75%,#03643D_100%)]
                            py-[9.5px] px-2 rounded-2xl"
                        />
                    </button>

                    <div className="md:hidden z-30">
                        <Twirl
                            toggled={menuOpen}
                            toggle={setMenuOpen}
                            color="#50D998"
                            size={24}
                        />
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden absolute top-[80px] left-0 w-full z-30 px-5">
                        <div
                            className="rounded-2xl
bg-green-500/10 backdrop-blur-xl
border border-green-500/20
shadow-[0_10px_30px_rgba(6,141,106,0.25)]
py-6"
                        >
                            <ul className="flex flex-col items-center gap-6 text-lg">
                                {[
                                    { to: "/about", label: "About Us" },
                                    { to: "/homework", label: "How we work" },
                                    { to: "/price", label: "Pricing" },
                                    { to: "/faq", label: "FAQ" },
                                ].map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `transition-all duration-300
       ${isActive ? "text-green-600 font-semibold" : "text-gray-900"}
       hover:text-green-600 hover:-translate-y-0.5`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}

                                <button className="mt-4 flex items-center gap-3 border border-[#100E0E26] rounded-[25px] py-2 pr-2 pl-4 hover:bg-[#32946819] duration-300">
                                    Log in
                                    <img
                                        src={ArrorRightIcon}
                                        alt="right"
                                        className="bg-[radial-gradient(85.38%_270.12%_at_0%_50%,#50D998_0%,#31B178_35%,#068D6A_75%,#03643D_100%)]
                                        py-[9.5px] px-2 rounded-2xl"
                                    />
                                </button>
                            </ul>
                        </div>
                    </div>
                )}

                <Hero />
            </div>
        </div>
    );
};

export default Navbar;
