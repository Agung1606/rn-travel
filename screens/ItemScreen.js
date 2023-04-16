import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ItemScreen({ route }) {
    const navigation = useNavigation();
    const data = route?.params?.param;

    return (
        <SafeAreaView className='flex-1 bg-white relative'>
            <ScrollView className='flex-1 px-4 py-6'>
                <View className='relative bg-white shadow-lg'>
                    <Image 
                        source={{
                            uri: data?.photo?.images?.medium?.url 
                                ? data?.photo?.images?.medium?.url
                                : 'https://media.istockphoto.com/id/1453413367/photo/ten-rubles-in-a-frozen-block-of-ice-lie-on-a-plate-next-to-a-spoon-and-fork-russian-finance.jpg?b=1&s=170667a&w=0&k=20&c=d993nbAmVN3ha06TBzBl0ZMFObqg3gLRDRSG_6wjMKk='
                            }}
                        className='w-full h-72 object-cover rounded-2xl'
                    />
                    {/* BUTTON TOP */}
                    <View className='absolute flex-row inset-x-0 top-5 justify-between px-4'>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Discover')}
                            className='w-10 h-10 rounded-md justify-center items-center bg-white'
                        >
                            <FontAwesome name='chevron-left' size={24} color='#06B2BE' />
                        </TouchableOpacity>
                        <TouchableOpacity className='w-10 h-10 rounded-md justify-center items-center bg-[#06B2BE]'>
                            <FontAwesome name='heartbeat' size={24} color='#fff' />
                        </TouchableOpacity>
                    </View>

                    {/* INFO BOTTOM */}
                    <View className='absolute flex-row inset-x-0 bottom-5 justify-between px-4'>
                        <View className='flex-row items-center space-x-2'>
                            <Text className='text-[12px] font-bold text-gray-100'>
                                {data?.price_level}
                            </Text>
                            <Text className='text-[28px] font-bold text-gray-100'>
                                {data?.price}
                            </Text>
                        </View>

                        <View className='px-2 rounded-md bg-teal-100 justify-center items-center'>
                            <Text>{data?.open_now_text}</Text>
                        </View>
                    </View>
                </View>
                
                {/* NAME AND LOCATION */}
                <View className='mt-4'>
                    <Text className='text-[#428288] text-[24px] font-bold'>
                        {data?.name}
                    </Text>
                    <View className='flex-row items-center space-x-2 mt-2'>
                        <FontAwesome name='map-marker' size={25} color='#8C9EA6' />
                        <Text className='text-[#8C9EA6] text-[20px] font-bold'>
                            {data?.location_string}
                        </Text>
                    </View>
                </View>

                {/* RATING, PRICE, BEARING, INFORMATION */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className='mt-4 flex-row justify-between items-center space-x-8'>
                    {data?.rating && (
                        <View className='flex-row items-center space-x-2'>
                           <View className='w-12 h-12 rounded-xl bg-red-100 justify-center items-center shadow-md'>
                                <FontAwesome name='star' size={24} color='#D58574' />
                           </View>
                           <View>
                                <Text className='text-[#515151]'>{data?.rating}</Text>
                                <Text className='text-[#515151]'>Ratings</Text>
                           </View>
                        </View>
                    )}
                    {data?.price_level && (
                        <View className='flex-row items-center space-x-2'>
                           <View className='w-12 h-12 rounded-xl bg-red-100 justify-center items-center shadow-md'>
                                <MaterialIcons name='attach-money' size={24} color='#D58574' />
                           </View>
                           <View>
                                <Text className='text-[#515151]'>{data?.price_level}</Text>
                                <Text className='text-[#515151]'>Price Level</Text>
                           </View>
                        </View>
                        )}
                        {data?.bearing && (
                            <View className='flex-row items-center space-x-2'>
                                <View className='w-12 h-12 rounded-xl bg-red-100 justify-center items-center shadow-md'>
                                        <FontAwesome name='map-signs' size={24} color='#D58574' />
                                </View>
                                <View>
                                        <Text className='text-[#515151] capitalize'>{data?.bearing}</Text>
                                        <Text className='text-[#515151]'>Bearing</Text>
                                </View>
                            </View>
                        )}
                    </View>
                </ScrollView>

                {/* DESCRIPTION */}
                {data?.description && (
                    <Text className='mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]'>
                        {data?.description}
                    </Text>
                )}

                {/* CUISINE */}
                {data?.cuisine && (
                    <View className='flex-row gap-2 justify-start items-center flex-wrap mt-4'>
                        {data?.cuisine.map((n) => (
                            <TouchableOpacity
                                key={n.key}
                                className='py-2 px-1 rounded-md bg-emerald-100'
                            >
                                <Text>{n.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                <View className='space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2'>
                    {data?.phone && (
                        <View className='flex-row items-center space-x-6'>
                            <FontAwesome name='phone' size={24} color='#428288' />
                            <Text className='text-lg'>{data?.phone}</Text>
                        </View>
                    )}
                    {data?.email && (
                        <View className='flex-row items-center space-x-6'>
                            <FontAwesome name='envelope' size={24} color='#428288' />
                            <Text className='text-lg'>{data?.email}</Text>
                        </View>
                    )}
                    {data?.address && (
                        <View className='flex-row items-center space-x-6'>
                            <FontAwesome name='map-pin' size={24} color='#428288' />
                            <Text className='text-lg'>{data?.address}</Text>
                        </View>
                    )}
                </View>

                <View className='mt-4 p-4 rounded-lg bg-[#06B2BE] justify-center items-center mb-12'>
                    <Text className='text-3xl font-semibold uppercase tracking-wider text-gray-100'>
                        Book Now
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}