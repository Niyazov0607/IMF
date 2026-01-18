import { Check } from "lucide-react";
import ArrorRightIcon from "../../assets/Vector.svg";

const Plan = () => {
    return (
        <div
            className="w-full m-auto pt-[160px] pb-[100px]"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
            <h1 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[56px] text-center">
                Choose the Plan That Fits Your <br />
                <span
                    className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[56px] text-[#64E79E]"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                >
                    Financial Journey
                </span>
            </h1>
            <div className="text-center flex justify-center  pb-10 pt-[56px]">
                <div className="cursor-pointer">
                    <p className="">Monthly</p>
                    <div className="h-[2px] bg-[#64E79E] w-[113px] mt-2"></div>
                </div>

                <p className="pl-[24px] text-[#BEBEBE] cursor-pointer">
                    Yearly{" "}
                    <span className="text-[#39A874] cursor-none py-[4px] px-[8px] bg-[#BCFBDD9C] rounded-[4px] ml-2">
                        -20%
                    </span>
                </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 place-items-center pb-10 md:px-40">
                <div
                    className="rounded-[28px] overflow-hidden
  bg-[linear-gradient(135deg,#043220_10%,#14473a_40%,#0c3421_100%)]
  text-white scale-105 md:scale-100
  w-full max-w-[350px] sm:w-[360px] md:max-w-[340px] lg:max-w-[393px] sm:mt-6
  border border-transparent bg-clip-padding"
                >
                    <div className="p-8">
                        <p className="text-lg opacity-80">Free</p>
                        <h2 className="text-5xl font-bold mt-2">
                            $0{" "}
                            <span className="text-lg font-normal">/Month</span>
                        </h2>
                    </div>

                    <div className="bg-[#F4FFF9] text-black p-8 rounded-t-[28px]">
                        <h3 className="text-2xl font-semibold mb-2">
                            Starter Plan
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Starter Plan grants you access to exclusive features
                        </p>

                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                                    <Check />
                                </span>
                                20 Voice messages
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                                    <Check />
                                </span>
                                50 Messages
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                                    <Check />
                                </span>
                                1 Contract review
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                                    <Check />
                                </span>
                                Basic Support
                            </li>
                        </ul>

                        <button className="cursor-pointer mt-8 w-full border border-green-500 text-green-600 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition">
                            Get Started Now{" "}
                            <img
                                className="bg-[radial-gradient(85.38%_270.12%_at_0%_50%,#50D998_0%,#31B178_35%,#068D6A_75%,#03643D_100%)]
                            py-[9.5px] px-2 rounded-2xl"
                                src={ArrorRightIcon}
                                alt="right"
                            />
                        </button>
                    </div>
                </div>

                <div
                    className="rounded-[28px] overflow-hidden mt-10 mb-16 
  bg-[linear-gradient(135deg,#03643D_10%,#068D6A_40%,#27A167_50%)]
  text-white scale-105 md:scale-100
  w-full max-w-[350px] sm:w-[360px] md:max-w-[340px] lg:max-w-[393px] sm:mt-6 translate-y-7
  border border-transparent bg-clip-padding"
                >
                    <div className="p-8">
                        <p className="text-lg opacity-90">Popular</p>
                        <h2 className="text-5xl font-bold mt-2">
                            $20{" "}
                            <span className="text-lg font-normal">/Month</span>
                        </h2>
                    </div>

                    <div className="bg-[#F4FFF9] text-black p-8 rounded-t-[28px]">
                        <h3 className="text-2xl font-semibold mb-2">
                            Standard Plan
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Standard Plan grants you access to exclusive
                            features
                        </p>

                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                500 Voice messages
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                1 000 Messages
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                3 Contract review
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                24/7 Support
                            </li>
                        </ul>

                        <button className="cursor-pointer mt-8 w-full bg-gradient-to-r from-green-900 to-green-300 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                            Start a Asking{" "}
                            <img
                                className=" bg-black
                            py-[9.5px] px-2 rounded-2xl"
                                src={ArrorRightIcon}
                                alt="right"
                            />
                        </button>
                    </div>
                </div>

                <div
                    className="rounded-[28px] overflow-hidden 
  bg-[linear-gradient(135deg,#043220_10%,#14473a_40%,#0c3421_100%)]
  text-white scale-105 md:scale-100
  w-full max-w-[350px] sm:w-[360px] md:max-w-[340px] lg:max-w-[393px] sm:mt-6
  border border-transparent bg-clip-padding"
                >
                    <div className="p-8">
                        <p className="text-lg opacity-80">Best choice</p>
                        <h2 className="text-5xl font-bold mt-2">
                            $40{" "}
                            <span className="text-lg font-normal">/Month</span>
                        </h2>
                    </div>

                    <div className="bg-[#F4FFF9] text-black p-8 rounded-t-[28px]">
                        <h3 className="text-2xl font-semibold mb-2">
                            Advanced Plan
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Advanced Plan grants you access to all exclusive
                            features
                        </p>

                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                5 000 Voice messages
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                10 000 Messages
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                10 Contract review
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                                    <Check />
                                </span>
                                24/7 Support
                            </li>
                        </ul>

                        <button className="cursor-pointer mt-8 w-full border border-green-500 text-green-600 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition">
                            Get Started Now{" "}
                            <img
                                className="bg-[radial-gradient(85.38%_270.12%_at_0%_50%,#50D998_0%,#31B178_35%,#068D6A_75%,#03643D_100%)]
                            py-[9.5px] px-2 rounded-2xl"
                                src={ArrorRightIcon}
                                alt="right"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
