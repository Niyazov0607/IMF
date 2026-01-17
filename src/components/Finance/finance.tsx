import FinanceImg from "../../assets/Main → About Image.png";
import FinanceBg from "../../assets/Shade → About Image Shade.png";

const Finance = () => {
    return (
        <div className="w-full bg-[#F5F5F5] pb-12 sm:pb-20 md:pb-32 lg:pb-40 xl:pb-[210px] px-4 sm:px-6 md:px-10 lg:px-16 xl:pl-20">
            <div className="w-full max-w-[1400px] mx-auto">
                <p
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[100px] pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-[64px] leading-tight"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                >
                    Your Trusted{" "}
                    <span className="text-[#64E79E]">
                        Islamic Finance Advisor
                    </span>
                    , Powered by AI <br className="hidden sm:block" />
                    Instant, <span className="text-[#64E79E]">Accurate</span>,
                    and Fully{" "}
                    <span className="text-[#64E79E]">Shariah-Compliant</span>
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-[80px]">
                    <div
                        className="relative
        w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px] 
        mx-auto lg:mx-0 right-10 lg:left-0


    "
                    >
                        <img
                            className="rounded-l-3xl w-full lg:w-[1000px]"
                            src={FinanceImg}
                            alt="finance"
                        />

                        <img
                            className="absolute top-0
        left-[140px] sm:left-[170px] md:left-[200px] lg:left-[230px] xl:left-60
        w-[202px] sm:w-[248px] md:w-[295.5px] lg:w-[247px] 
        rounded-r-3xl
    "
                            src={FinanceBg}
                            alt="financeBg"
                        />

                        <div
                            className="absolute
                                top-[110px] sm:top-[130px] md:top-[150px] lg:top-[115px]
                                left-[170px] sm:left-[200px] md:left-[230px] lg:left-[260px]
                            "
                        >
                            <h1
                                className="md:text-[84px] text-white text-[24px]"
                                style={{
                                    fontFamily: "'Libre Baskerville', serif",
                                }}
                            >
                                16K+
                            </h1>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: "'Libre Baskerville', serif",
                                }}
                            >
                                Islamic Finance Queries <br />
                                Answered
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-full
                            lg:pl-50
                        "
                    >
                        <p
                            className="text-base sm:text-lg md:text-xl xl:text-[20px] leading-relaxed text-center lg:text-left"
                            style={{
                                fontFamily: "'Libre Baskerville', serif",
                            }}
                        >
                            Our AI helps you navigate Islamic finance with{" "}
                            <br />
                            confidence—whether you're asking about halal <br />
                            investments, zakat calculations, contracts, business{" "}
                            <br />
                            rulings, or personal finance decisions
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 xl:gap-[27px] mt-8 md:mt-10 xl:mt-[42px]">
                            <div
                                className="w-full sm:w-[220px] md:w-[240px] xl:w-[260px] p-[6px] rounded-[12px]"
                                style={{
                                    background:
                                        "linear-gradient(270deg, #3A3A3A 0%, #50D998 50.16%, #3A3A3A 100%)",
                                    boxShadow: "0px 4px 4px 0px #50D9981F",
                                }}
                            >
                                <div className="bg-[#030705] rounded-[6px] py-4 md:py-5 xl:py-[16px] pl-5 md:pl-6 xl:pl-[20px]">
                                    <h1
                                        className="text-3xl sm:text-4xl md:text-5xl xl:text-[44px] text-white font-bold"
                                        style={{
                                            fontFamily:
                                                "'Libre Baskerville', serif",
                                        }}
                                    >
                                        106K+
                                    </h1>
                                    <p
                                        className="text-sm sm:text-base md:text-lg xl:text-[18px] text-white leading-tight mt-1"
                                        style={{
                                            fontFamily:
                                                "'Libre Baskerville', serif",
                                        }}
                                    >
                                        Global Users <br /> Supported
                                    </p>
                                </div>
                            </div>

                            <div
                                className="w-full sm:w-[220px] md:w-[240px] xl:w-[260px] p-[6px] rounded-[12px]"
                                style={{
                                    background:
                                        "linear-gradient(270deg, #3A3A3A 0%, #50D998 50.16%, #3A3A3A 100%)",
                                    boxShadow: "0px 4px 4px 0px #50D9981F",
                                }}
                            >
                                <div className="bg-[#030705] rounded-[6px] py-4 md:py-5 xl:py-[16px] pl-5 md:pl-6 xl:pl-[20px]">
                                    <h1
                                        className="text-3xl sm:text-4xl md:text-5xl xl:text-[44px] text-white font-bold"
                                        style={{
                                            fontFamily:
                                                "'Libre Baskerville', serif",
                                        }}
                                    >
                                        106K+
                                    </h1>
                                    <p
                                        className="text-sm sm:text-base md:text-lg xl:text-[18px] text-white leading-tight mt-1"
                                        style={{
                                            fontFamily:
                                                "'Libre Baskerville', serif",
                                        }}
                                    >
                                        Global Users <br /> Supported
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <button
                                className="flex items-center py-2 sm:py-3 xl:py-[10px] px-3 sm:px-4 xl:px-[12px] rounded-[40px] text-white gap-2 sm:gap-3 xl:gap-[12px] mt-6 sm:mt-8 xl:mt-[30px] cursor-pointer text-sm sm:text-base hover:shadow-lg transition-shadow"
                                style={{
                                    fontFamily: "'Libre Baskerville', serif",
                                    background:
                                        "radial-gradient(85.38% 270.12% at 0% 50%, #03643D 0%, #068D6A 25%, #31B178 65%, #50D998 100%)",
                                }}
                            >
                                Start Asking
                                <div className="bg-[#111111] p-2 sm:p-2.5 xl:py-[9.5px] xl:px-[8px] rounded-[16px]">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 12H19M19 12L12 5M19 12L12 19"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finance;
