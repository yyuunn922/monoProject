/// <reference types="nativewind/types" />

declare module "*.svg" {
    import React from "react";
    import {SvgProps} from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}

declare const webkit: Webkit;
interface Window {
    webkit: Webkit;
    ReactNativeWebView: {
        postMessage(msg: string): void;
    };
}
