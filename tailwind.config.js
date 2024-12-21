const path = require('path');

const config = require('@packages/configs/tailwind.config')
module.exports = {
    ...config,
    content: [
        path.resolve(__dirname, './packages/**/*.{js,jsx,ts,tsx}'),
    ],
}
