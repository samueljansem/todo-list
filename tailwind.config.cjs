/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        colors: {
            gray: {
                100: '#F2F2F2',
                200: '#D9D9D9',
                300: '#808080',
                400: '#333333',
                500: '#262626',
                600: '#1A1A1A',
                700: '#0D0D0D',
            },
            purple: {
                300: '#8284FA',
                700: '#5E60CE',
            },
            blue: {
                300: '#4EA8DE',
                700: '#1E6F9F',
            },
            danger: '#E25858',
        },
        extend: {
            fontFamily: {
                sans: 'Inter, sans-serif',
            },
        },
    },
    plugins: [],
};
