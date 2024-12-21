import {Text, TextInput as NativeTextInput, TextInputProps, View} from 'react-native';
import {Color} from '@packages/configs/tailwindThemeItem'

export function TextInput({label, className, ...props}: { label?: string, className?: string } & TextInputProps) {
    return (
        <View className={`border-b py-2 border-BorderLine-200 ${className}`}>
            {label && (
                <Text className={'P-Body5 mb-1 text-Text-600'}>{label}</Text>
            )}
            <NativeTextInput {...props} className={'P-Title5'} placeholderTextColor={Color.Text.Hold}/>
        </View>
    )
}
