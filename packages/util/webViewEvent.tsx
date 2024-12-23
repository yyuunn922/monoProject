export type WebViewEventType = {
    type: string,
    payload: string | object | number,
}

export function EventToRN({type, payload}: WebViewEventType) {
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({
        type: type,
        payload: JSON.stringify(payload),
    }));
}
