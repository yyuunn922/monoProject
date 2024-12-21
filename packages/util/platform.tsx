export function OS(): string {
    return navigator.userAgent;
}

export function IsMobile(): boolean {
    return OS() === 'android' || OS() === 'ios';
}

export function IsWeb(): boolean {
    return OS() === 'web';
}
