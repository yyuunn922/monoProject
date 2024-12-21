import {Dimensions, Modal as NativeModal, ModalProps, Platform, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import * as SharedCss from '../css/defaultClassName'
import {DefaultPadding} from "./layout";
import CloseIcon from '@packages/assets/icons/commons/Close.svg'


// TODO::SafeAreaView 에러가 발생함, 확인해야함
// 사용하는 프로젝트 컨텐츠에서 총 높이를 지정해야합니다
export function BottomSheet({children, show, setShow, closeButtonShow = false}: {
    children: React.ReactNode,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    closeButtonShow?: boolean
} & ModalProps) {
    const [inShow, setInShow] = useState(false);

    // in Show 데이터가 변경되면, 모달 자체 스테이트로 open, off 이벤트를 실행합니다
    useEffect(() => {
        if (show) {
            setInShow(true);
        } else {
            const timer = setTimeout(() => {
                setInShow(false);
            }, 400)
            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        <NativeModal visible={inShow} transparent={true}>
            <TouchableOpacity activeOpacity={1} className={`bg-Dim-800 ${SharedCss.ItemCenter}`} onPress={() => {
                setShow(false);
            }}>
                <View className={`
                    justify-end 
                    ${show ? 'animate-slideUp' : 'animate-slideDown'}
                    ${SharedCss.WebMobileWindowSize}
                `}>
                    <TouchableOpacity activeOpacity={1}>
                        <View className={`
                            bg-white shadow-lg
                            ${Platform.OS === 'web' ? 'rounded-2xl' : 'rounded-t-2xl'}
                        `}>
                            <DefaultPadding>
                                {closeButtonShow && show && (
                                    <TouchableOpacity onPress={() => setShow(false)}
                                                      className={'absolute right-5 top-5 z-40'}>
                                        <CloseIcon/>
                                    </TouchableOpacity>
                                )}
                                {children}
                            </DefaultPadding>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </NativeModal>
    )
}

export function Modal({show, setShow, children, closeButtonShow = false}: {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
    closeButtonShow?: boolean
}) {
    const [inShow, setInShow] = useState(false);

    useEffect(() => {
        if (show) {
            setInShow(true);
        } else {
            const timer = setTimeout(() => {
                setInShow(false);
            }, 400)
            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        <NativeModal visible={inShow} transparent={true}>
            <TouchableOpacity activeOpacity={1} className={`bg-Dim-800 ${SharedCss.ItemCenter}`} onPress={() => {
                setShow(false);
            }}>
                <View className={`
                    ${show ? 'animate-slideUp' : 'animate-slideDown'}
                    ${SharedCss.WebMobileWindowSize}
                `}>
                    <TouchableOpacity activeOpacity={1} className={'px-2 w-full'}>
                        <View className={`bg-white shadow-lg rounded-2xl`}>
                            <DefaultPadding>
                                {closeButtonShow && show && (
                                    <TouchableOpacity onPress={() => setShow(false)}
                                                      className={'absolute right-5 top-5 z-40'}>
                                        <CloseIcon/>
                                    </TouchableOpacity>
                                )}
                                <Text>{Dimensions.get('window').width}</Text>
                                {children}
                            </DefaultPadding>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </NativeModal>
    )
}
