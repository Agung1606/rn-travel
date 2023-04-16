import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function MenuContainer({ title, imageSrc, type, setType }) {
    const handlePress = () => setType(title.toLowerCase());
  return (
    <TouchableOpacity 
        className='items-center justify-center space-y-2'
        onPress={handlePress}
    >
        <View className={`w-20 h-20 shadow-sm rounded-full p-2
            ${type === title.toLowerCase() ? 'bg-gray-200' : ''}`}
        >
            <Image 
                source={imageSrc}
                className='w-full h-full object-contain'
            />
        </View>
        <Text className='text-[#00BCC9]'>{title}</Text>
    </TouchableOpacity>
  )
}