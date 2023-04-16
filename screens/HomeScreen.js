import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white flex-1 relative'>
            {/* first section */}
            <View className='flex-row items-center space-x-2 px-6 mt-8'>
                <View className='w-16 h-16 bg-black rounded-full items-center justify-center'>
                    <Text className='text-[#00BCC9] text-3xl font-semibold'>Go</Text>
                </View>
                <Text className='text-[#2A2B4B] text-3xl font-semibold'>Travel</Text>
            </View>

            {/* second section */}
            <View className='px-6 mt-8 space-y-1'>
                <Text className='text-[#2A2B4B] text-[39px]'>Enjoy the trip with</Text>
                <Text className='text-[#00BCC9] text-[35px] font-bold'>Good Moments</Text>
                <Text className='text-[#3C6072] text-base'>
                    skndksnifnvinvkr rgotjrg gpotjg otjpogpjtgjt pohjyhyph yhkp 
                    yphkyp hyogj
                </Text>
            </View>

            {/* Circle section */}
            <View className='w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-32 -right-32' />
            <View className='w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-16 -left-32' />

            <View className='flex-1 relative justify-center items-center'>
                <Animatable.Image 
                    animation={'fadeIn'}
                    easing='ease-in-out'
                    source={HeroImage}
                    className='w-full h-full object-cover mt-14'
                />
                <TouchableOpacity 
                    className='absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full justify-center items-center'
                    onPress={() => navigation.navigate('Discover')}
                >
                    <Animatable.View 
                        animation='pulse'
                        easing='ease-in-out'
                        iterationCount={'infinite'}
                        className='w-20 h-20 bg-[#00BCC9] rounded-full justify-center items-center'
                    >
                        <Text className='text-gray-50 text-[36px] font-semibold'>Go</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}