import { View, Text, Button, Image, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'
// IMAGE
import { Avatar, Hotels, Attractions, Restaurants, NotFound } from '../assets'
// COMPONENTS
import ItemContainer from '../components/ItemContainer';
import MenuContainer from '../components/MenuContainer';
// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { getPlacesData } from '../api';

export default function DiscoverScreen() {
  const navigation = useNavigation();

  const [type, setType] = useState('hotels');
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type)
      .then(data => {
        setMainData(data);
        setInterval(() => {
          setIsLoading(false);
        }, 2000)
      })
      
  }, [type]);

  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      <View className='flex-row items-center justify-between px-8'>
        <View>
          <Text className='text-[33px] text-[#0B646B] font-bold'>Discover</Text>
          <Text className='text-[28px] text-[#537283]'>the beauty today</Text>
        </View>

        <View className='w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg'>
          <Image
            source={Avatar}
            className='w-full h-full rounded-md object-cover'
          />
        </View>
      </View>

      <View className='flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-xl shadow-black mt-4'>
        <GooglePlacesAutocomplete
          placeholder='Search'
          GooglePlacesDetailsQuery={{ fields: 'geometry'}}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: 'AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1Ag4sCxQ',
            language: 'en',
          }}
        />
      </View>

      {isLoading ? (
        <View className='flex-1 justify-center items-center'>
          <ActivityIndicator size='large' color='#00ff00'/>
        </View>
      ) : (
      <ScrollView>
        {/* Menu container */}
        <View className='flex-row items-center justify-between px-6 mt-8'>
          <MenuContainer 
            key={'hotel'}
            title='Hotels'
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer 
            key={'attractions'}
            title='Attractions'
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer 
            key={'restaurants'}
            title='Restaurants'
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

        {/* TOP TIPS */}
        <View>
          <View className='flex-row justify-between items-center px-4 mt-8'>
            <Text className='text-[#2C7379] text-[23px] font-bold'>
              Top Tips
            </Text>
            <TouchableOpacity 
              className='flex-row justify-center items-center space-x-2'
            >
              <Text className='text-[#A0C4C7] text-[15px]'>
                Explore
              </Text>
              <FontAwesome name='long-arrow-right' size={24} color='#A0C4C7' />
            </TouchableOpacity>
          </View>
        </View>

        {/* PLACES */}
        {/* NOTE: for now this places is hard coding we need make it dynamic */}
        <View className='px-4 mt-8 flex-row justify-evenly items-center flex-wrap'>
          {mainData?.length > 0 ? (
            <>
              {mainData?.map((data, index) => (
                <ItemContainer 
                  key={index}
                  imageSrc={
                    data?.photo?.images?.medium?.url 
                    ? data?.photo?.images?.medium?.url
                    : 'https://media.istockphoto.com/id/1453413367/photo/ten-rubles-in-a-frozen-block-of-ice-lie-on-a-plate-next-to-a-spoon-and-fork-russian-finance.jpg?b=1&s=170667a&w=0&k=20&c=d993nbAmVN3ha06TBzBl0ZMFObqg3gLRDRSG_6wjMKk='
                  } 
                  title={data?.name} 
                  location={data?.location_string} 
                  data={data}
                />
              ))}
            </>
          ) : (
            <>
              <View className='w-full h-[400px] justify-center items-center space-y-8'>
                <Image 
                  source={NotFound} 
                  className='w-32 h-32 object-cover'
                />
                <Text className='text-2xl text-[#428288] font-semibold'>
                  Opps... No Data Found
                </Text>
              </View>
            </>
          )}
        </View>

      </ScrollView>
      )}

    </SafeAreaView>
  )
}