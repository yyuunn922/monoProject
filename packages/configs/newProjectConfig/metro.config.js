const path = require('path');
const config = require('@packages/configs/metro.config');

module.exports = {
    ...config,
    watchFolders: [
        path.resolve(__dirname),
        path.resolve(__dirname, '../../packages'),
    ],
};
