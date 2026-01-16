import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                libre: ["Libre Baskerville", "serif"],
            },
        },
    },
    plugins: [],
};

export default config;
