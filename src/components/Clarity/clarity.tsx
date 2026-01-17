const Clarity = () => {
    return (
        <div className="min-h-screen w-full bg-[#F5F5F5] p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h1
                            className="text-4xl font-light mb-2"
                            style={{ fontFamily: "'Libre Baskerville', serif" }}
                        >
                            How{" "}
                            <span
                                className="text-emerald-400 font-medium"
                                style={{
                                    fontFamily: "'Libre Baskerville', serif",
                                }}
                            >
                                We Work
                            </span>{" "}
                            — From
                        </h1>
                        <h1
                            className="text-4xl font-light"
                            style={{ fontFamily: "'Libre Baskerville', serif" }}
                        >
                            Question to{" "}
                            <span className="text-emerald-400 font-medium">
                                Clarity
                            </span>
                        </h1>
                    </div>
                    <p
                        className="text-sm  max-w-xs text-right"
                        style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                        Our process is simple, transparent, and designed to give
                        you Shariah-compliant answers — fast
                    </p>
                </div>
                <div className="w-full h-[4px] bg-white rounded-full overflow-hidden mb-10">
                    <div className="h-full w-[25%] bg-[#64E79E] rounded-full  "></div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-1">
                    <div className="bg-[#030705] text-white px-6 py-3 rounded-lg -mb-7">
                        <span className="text-sm font-bold text-[#64E79E]">
                            01
                        </span>
                    </div>

                    <div className="bg-[#030705] text-white px-6 py-3 rounded-lg">
                        <span className="text-sm font-bold">02</span>
                    </div>

                    <div className="bg-[#030705] text-white px-6 py-3 rounded-lg">
                        <span className="text-sm font-bold">03</span>
                    </div>

                    <div className="bg-[#030705] text-white px-6 py-3 rounded-lg">
                        <span className="text-sm font-bold">04</span>
                    </div>
                </div>

                <div
                    className="rounded-2xl px-8 sm:px-10 md:px-14 py-14 sm:py-16 md:py-20 text-white text-center"
                    style={{
                        background:
                            "radial-gradient(40% 50% at 50% 75%, #2cd7a9 -100%, #114231 50%, #030705 100%)",
                    }}
                >
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl mb-6"
                        style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                        Understand Your Needs
                    </h2>

                    <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        We begin by identifying your financial question —
                        whether it’s about halal investing, zakat, business
                        contracts, or personal finance — to ensure the AI
                        provides the most relevant guidance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Clarity;
