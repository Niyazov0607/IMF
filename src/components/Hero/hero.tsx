import HeroImg from "../../assets/image 7073.svg";
import HeroArrowRight from "../../assets/Vector.svg";
import Impus from "../../assets/impus.svg";
import ImpusLogo from "../../assets/logoimpus.svg";
import ImpusLogoTwo from "../../assets/logoimpus (2).svg";
import ImpusTwo from "../../assets/impus (2).svg";
import ImpusThree from "../../assets/impus (3).svg";
import ImpusFour from "../../assets/impus (4).svg";

const Hero = () => {
    return (
        <div className="w-full md:w-360 m-auto relative z-1 min-h-screen px-4 md:px-0">
            <div className="">
                <div className="flex flex-col md:flex-row items-start md:items-center pt-[100px] md:pt-[200px] justify-between md:px-[25px] gap-8 md:gap-0">
                    <div className="w-full md:w-auto">
                        <h1
                            className="text-[40px] md:text-[90px] font-normal leading-tight"
                            style={{ fontFamily: "'Libre Baskerville', serif" }}
                        >
                            <span className="inline-flex flex-wrap items-center justify-start md:justify-center gap-2">
                                Your{" "}
                                <img
                                    src={HeroImg}
                                    alt="img"
                                    className="w-[40px] md:w-auto rounded-lg"
                                />{" "}
                                24/7 Islamic
                            </span>
                            <br />
                            Finance Advisor
                        </h1>
                    </div>

                    <div className="text-left md:text-right w-full md:w-auto md:pt-[80px]">
                        <p className="text-[#696969] text-left md:text-right text-sm md:text-base">
                            Your Shariah-Compliant <br /> Finance Assistant
                        </p>
                        <button
                            className="flex items-center py-[10px] px-[12px] rounded-[40px] text-white gap-[12px] mt-[14px] cursor-pointer text-sm md:text-base"
                            style={{
                                fontFamily: "'Libre Baskerville', serif",
                                background:
                                    "radial-gradient(85.38% 270.12% at 0% 50%, #03643D 0%, #068D6A 25%, #31B178 65%, #50D998 100%)",
                            }}
                        >
                            Start Asking{" "}
                            <img
                                className="bg-[#111111] py-[9.5px] px-[8px] rounded-[16px]"
                                src={HeroArrowRight}
                                alt="right"
                            />
                        </button>
                    </div>
                </div>

                <div className="relative mt-[40px] md:mt-[60px]">
                    <div
                        className="h-px w-full z-30"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(240,240,240,0.4) 0%, rgba(245,245,245,0.25) 40%, rgba(250,250,250,0.1) 70%, rgba(255,255,255,0) 100%)",
                        }}
                    />

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-[16px] md:gap-[24px] mt-[20px] pl-0 md:pl-5">
                        <h3 className="uppercase text-xs md:text-sm font-medium whitespace-nowrap">
                            trusted by:
                        </h3>

                        <div className="overflow-x-auto w-full md:w-auto">
                            <div className="flex items-center gap-[30px] md:gap-[50px] opacity-95">
                                <img
                                    src={Impus}
                                    alt="impus"
                                    className="h-6 md:h-auto"
                                />
                                <img
                                    src={ImpusLogo}
                                    alt="impus"
                                    className="h-6 md:h-auto"
                                />
                                <img
                                    src={ImpusLogoTwo}
                                    alt="impus"
                                    className="h-6 md:h-auto"
                                />
                                <img
                                    src={ImpusTwo}
                                    alt="impus"
                                    className="h-6 md:h-auto"
                                />
                                <img
                                    src={ImpusThree}
                                    alt="impus"
                                    className="h-6 md:h-auto"
                                />
                                <img
                                    src={ImpusFour}
                                    alt="impus"
                                    className="h-6 md:h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
