import {useFonts} from 'expo-font';
import {useEffect, useState} from 'react';

export default function InitFont() {
    const [loadingState, setLoadingState] = useState(false);
    const [loaded] = useFonts({
        'Pretendard-Bold': require('./fonts/Pretendard-Bold.otf'),
        'Pretendard-Light': require('./fonts/Pretendard-Light.otf'),
        'Pretendard-Medium': require('./fonts/Pretendard-Medium.otf'),
        'Pretendard-Regular': require('./fonts/Pretendard-Regular.otf'),
        'Pretendard-SemiBold': require('./fonts/Pretendard-SemiBold.otf'),
        'Roboto-Bold': require('./fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('./fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('./fonts/Roboto-Regular.ttf'),
        'Roboto-Light': require('./fonts/Roboto-Light.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            setLoadingState(true);
        }
    }, [loaded]);

    return loadingState;
};
