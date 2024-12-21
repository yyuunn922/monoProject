const {getDefaultConfig} = require('expo/metro-config');
const {resolve} = require('path');
const {withNativeWind} = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
const {transformer, resolver} = config;

config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
};

config.resolver = {
    ...resolver,
    assetExts: config.resolver.assetExts.filter(ext => ext !== "svg"), // SVG 제거
    sourceExts: [...config.resolver.sourceExts, "svg"], // SVG 추가
};

module.exports = withNativeWind(config, {
    input: resolve(__dirname, './global.css'),
    configPath: resolve(__dirname, './tailwind.config.js'),
});
