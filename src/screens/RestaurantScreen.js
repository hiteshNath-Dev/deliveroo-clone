import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { urlFor } from '../../sanity';
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishCard from '../components/DishCard';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  const max_length = 20;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <ScrollView>
      <View className='relative'>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className='w-full h-56 p-4 bg-gray-300'
        />
        <TouchableOpacity
          className='absolute top-14 left-5 bg-gray-100 rounded-full p-2'
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon color='#00CCBB' size={20} />
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='px-4 pt-4 pb-4 gap-1'>
          <Text className='text-3xl font-bold'>{title}</Text>
          <View className='flex-row space-x-2'>
            <View className='flex-row space-x-1 items-center'>
              <StarIcon color='green' opacity={0.5} size={20} />
              <Text className='text-gray-500 text-xs'>
                <Text className='text-green-500'>{rating}</Text> • {genre}
              </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
              <MapPinIcon color='gray' opacity={0.4} size={20} />
              <Text className='text-gray-500 text-xs'>
                Nearby •{' '}
                {address.length > max_length
                  ? address.substring(0, max_length) + '...'
                  : max_length}
              </Text>
            </View>
          </View>
          <Text className='text-gray-500'>{short_description}</Text>
        </View>
        <TouchableOpacity className='flex-row space-x-2 p-4 items-center border-y border-gray-300'>
          <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
          <Text className='font-bold text-md flex-1 pl-2'>
            Have a food allergy?
          </Text>
          <ChevronRightIcon color='#00CCBB' />
        </TouchableOpacity>
      </View>
      <View>
        <Text className='font-bold px-4 pt-6 mb-3 text-xl'>Menu</Text>
        {dishes.map((dish) => (
          <DishCard
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            imgUrl={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
