import * as SharedCss from '@packages/ui/css/defaultClassName'
import {ScrollView as RNScrollView, ScrollViewProps, Text, TouchableOpacity, View, ViewProps} from 'react-native'
import * as Platform from '@packages/util/platform'
import LeftArrow from '@packages/assets/icons/commons/LeftArrow.svg'

import React from "react";
import {useRouter} from "expo-router";

// 웹 화면인지 체크후, 웹화면이면, 모바일 크기의 레이아웃을 생성후 컨텐츠를 하위로 내려줌
export function PlatformLayout({children}: { children: React.ReactNode }) {
    if (!Platform.IsMobile()) {
        return (
            <View className={`w-full h-full bg-gray-100 ${SharedCss.Center}`}>
                {/* Mobile Frame */}
                <View
                    className={`
                        bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden
                        ${SharedCss.WebMobileWindowSize} 
                    `}>
                    {/* Status Bar */}
                    <View
                        className={`h-6 bg-gray-200 rounded-t-2xl flex ${SharedCss.Center}`}>
                        <Text className={'text-[10px] text-gray-500'}>{new Date().toDateString()}</Text>
                    </View>
                    {/* Main Content */}
                    {children}
                </View>
            </View>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}

// 페이지 전환 에니메이션뷰
export enum PageChangeAnimationViewAnimationState {
    next = "next",
    stop = "stop",
    prev = "prev",
}

export function PageChangeAnimationView({children, animationState}: {
    children: React.ReactNode,
    animationState: PageChangeAnimationViewAnimationState
}) {

    return (
        <View className={'flex-1'}>
            {/*화면전환*/}
            <View
                className={`
                absolute w-full h-full z-40 bg-white shadow-xl 
                ${animationState === PageChangeAnimationViewAnimationState.next ? 'animate-slideFromLeft' : 'hidden'} 
                `}>
                <TobBar disabled={false}/>
                <View className={`flex-1 ${SharedCss.ItemCenter}`}>
                </View>
            </View>
            {/*자식뷰*/}
            <View className={`
            flex-1
            ${animationState === PageChangeAnimationViewAnimationState.prev && 'animate-slideRight'} 
            `}>
                {children}
            </View>
        </View>
    )
}


// 기본 스크롤뷰에 하단 공간을 추가
export function ScrollView({children, ...props}: {
    children: React.ReactNode,
    padding?: number
} & ScrollViewProps) {
    return (
        <RNScrollView {...props}>
            {children}
            <View className={'h-20'}/>
        </RNScrollView>
    )
}

// 기본 패딩 추가
export function DefaultPadding({isFull = true, className, topPaddingZero, ...props}: {
    isFull?: boolean,
    className?: string,
    topPaddingZero?: boolean,
} & ViewProps) {
    return (
        <View {...props} className={`p-5 w-full
        ${isFull && 'flex flex-1'}  
        ${topPaddingZero && 'pt-0'} 
        ${className}`}/>
    )
}


// 기본 탑바 메뉴
export function TobBar({title, onPress, className, disabled = false}: {
    title?: string,
    onPress?: () => void,
    className?: string,
    disabled?: boolean,
}) {
    const router = useRouter();
    return (
        <TouchableOpacity disabled={disabled} className={`px-[20px] py-[17px] ${className}`} onPress={() => {
            if (onPress) {
                onPress();
            } else {
                router.back();
            }
        }}>
            <View className={`${SharedCss.FlexRow}`}>
                <View className={'mr-2'}>
                    <LeftArrow/>
                </View>
                <Text className={'P-Body3'}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
