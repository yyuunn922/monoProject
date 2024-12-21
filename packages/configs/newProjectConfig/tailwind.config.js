const config = require('../../../tailwind.config')
config.content = [
    ...config.content, './app/**/*.{js,jsx,ts,tsx}'
]
module.exports = config
