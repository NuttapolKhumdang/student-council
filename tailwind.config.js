/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./articles/*.html",
        "./components/*.html",
        "./javascripts/*.js",
    ],
    theme: {
        fontFamily: {
            sans: ["Poppins", "Noto Sans Thai", "sans-serif"],
            mono: ["Space Mono", "monospace"],
            display: ["Major Mono Display", "monospace"]
        },
        extend: {},
    },
    plugins: [],
}

