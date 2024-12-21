const plugin = require('tailwindcss/plugin');
const {Color, PretendardText, RobotoText} = require("./tailwindThemeItem");

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: Color,
            animation: {
                slideUp: 'slideUp 0.25s ease-in-out',
                slideDown: 'slideDown 0.25s ease-in-out forwards',
                slideLeft: 'slideLeft 0.25s ease-in-out forwards',
                slideRight: 'slideRight 0.25s ease-in-out forwards',
                slideFromLeft: 'slideFromLeft 0.25s ease-in-out',
            },
            keyframes: {
                slideUp: {
                    '0%': {transform: 'translateY(100%)'},
                    '100%': {transform: 'translateY(0)'},
                },
                slideDown: {
                    '0%': {transform: 'translateY(0)'},
                    '100%': {transform: 'translateY(100%)'},
                },
                slideRight: {
                    '0%': {transform: 'translateX(0%)'},
                    '100%': {transform: 'translateX(100%)'},
                },
                slideLeft: {
                    '0%': {transform: 'translateX(0%)'},
                    '100%': {transform: 'translateX(-100%)'},
                },
                slideFromLeft: {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(0)'},
                }
            },
        },
    },
    plugins: [
        plugin(function ({addUtilities}) {
            const pretendardText = Object.entries(PretendardText).reduce((acc, [key, value]) => {
                acc[`.${key}`] = {
                    fontSize: value[0],
                    lineHeight: value[1],
                    fontFamily: value[2],
                };
                return acc;
            }, {});
            const robotoText = Object.entries(RobotoText).reduce((acc, [key, value]) => {
                acc[`.${key}`] = {
                    fontSize: value[0],
                    lineHeight: value[1],
                    fontFamily: value[2],
                };
                return acc;
            }, {});

            addUtilities(pretendardText);
            addUtilities(robotoText);
        }),
    ],
};
