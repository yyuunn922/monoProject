// 컴포넌트 하위 요소를 중앙 정렬합니다
import {Dimensions} from "react-native";

// 현재 요소를 전체크기로 잡고, 하위 요소를 중앙에 배치합니다
export const ItemCenter = `flex-1 justify-center items-center`

// 웹 화면이면, 모바일 크기에 맞는 레이아웃 크기를 설정하고, 아니면 전체크기를 잡습니다
export let WebMobileWindowSize: string;
if (Dimensions.get('window').width > 500) {
    WebMobileWindowSize = `w-[440px] h-[900px]`
} else {
    WebMobileWindowSize = `w-full h-full`
}


export const Center = `items-center justify-center` // 중앙 정렬
export const FlexRow = `flex flex-row` // 수평 Flex 기본
