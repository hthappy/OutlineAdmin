import { nextui } from "@nextui-org/theme";
import { join } from "node:path";

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        join(__dirname, "./src/**/*.{js,ts,jsx,tsx,mdx}"),
        join(__dirname, "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}")
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#549a7f",
                    50: "#eef5f2",
                    100: "#ddebe5",
                    200: "#bbd7cc",
                    300: "#98c2b2",
                    400: "#76ae99",
                    500: "#549a7f",
                    600: "#437b66",
                    700: "#325c4c",
                    800: "#223e33",
                    900: "#111f19"
                }
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"]
            }
        }
    },
    darkMode: "class",
    plugins: [nextui()]
};
