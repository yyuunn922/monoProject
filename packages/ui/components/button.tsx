import {useRouter} from 'expo-router';
import {Color} from '@packages/configs/tailwindThemeItem'
import {Text, TouchableOpacity} from "react-native";
import PlusIcon from '@packages/assets/icons/commons/Plus.svg'

// 기본 버튼
export function Button({onPress, title, theme = 'Primary', disabled = false, className}: {
    onPress: () => void,
    theme?: 'Primary' | 'Secondary' | 'Gray',
    disabled?: boolean,
    title: string,
    className?: string,
}) {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} className={`
            flex h-[55px] rounded-lg justify-center items-center
            ${theme === 'Primary' && 'bg-CiriusPet-500'}
            ${theme === 'Secondary' && 'bg-CiriusPet-100'}
            ${theme === 'Gray' && 'bg-CiriusPetGray-200'}
            ${disabled && '!bg-CiriusPetGray-200'}
            ${className}
        `}>
            <Text className={`
                P-Body1
                ${theme === 'Primary' && 'text-white'}
                ${theme === 'Secondary' && 'text-CiriusPet-500'}
                ${theme === 'Gray' && 'text-Text-600'}
                ${disabled && '!text-white'}
            `}>{title}</Text>
        </TouchableOpacity>
    )
}


// 기본 플러팅 버튼
export function FloatingButton({onPress, theme = 'Default', disabled = false}: {
    onPress: () => void,
    theme?: 'Default',
    disabled?: boolean,
}) {
    console.log(theme);
    console.log(disabled);
    return (
        <TouchableOpacity
            onPress={onPress} disabled={disabled}
            className={`
                absolute bottom-5 right-5 w-[56px] aspect-square flex rounded-full items-center justify-center
                ${theme === 'Default' && 'bg-Text-900'}
                ${disabled && '!bg-CiriusPetGray-200'}
            `}
        >
            <PlusIcon color={Color.Basic.White}/>
        </TouchableOpacity>
    )
}
