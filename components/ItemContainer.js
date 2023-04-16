import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ItemContainer({ imageSrc, title, location, data }) {
    const navigation = useNavigation();

  return (
    <TouchableOpacity 
        className='rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[150px] my-2'
        onPress={() => navigation.navigate('ItemScreen', { param: data })}
    >
        
        <Image 
            source={{ uri: imageSrc }}
            className='w-full h-36 rounded-md object-cover'
        />

        <Text className='text-[#428288] text-[15px] font-bold'>
            {title 
                ? title?.length > 14 ? `${title?.slice(0, 14)}..` : title 
                : 'Unknown'
            }
        </Text>

        <View className='flex-row items-center space-x-1'>
            <FontAwesome name='map-marker' size={20} color='#8597A2' />
            <Text className='text-[#428288] text-[12px] font-bold'>
                {location 
                    ? location?.length > 16 ? `${location?.slice(0, 16)}..` : location 
                    : 'Unknown'
                }
            </Text>
        </View>

    </TouchableOpacity>
  )
}