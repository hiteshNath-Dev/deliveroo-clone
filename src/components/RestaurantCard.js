import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
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
}) => {
  const max_length = 22;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className='mr-3 bg-white shadow'
      onPress={() => {
        navigation.navigate('Restaurant', {
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
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className='h-36 w-60 rounded-sm'
      />
      <Text className='px-3 pt-2 font-bold text-lg'>{title}</Text>
      <View className='px-3 flex-row items-center space-x-1'>
        <StarIcon color='green' opacity={0.5} size={20} />
        <Text className='text-xs text-gray-500'>
          <Text className='text-green-500'>{rating}</Text> • {genre}
        </Text>
      </View>
      <View className='px-3 flex-row items-center space-x-1 pb-4'>
        <MapPinIcon color='gray' opacity={0.4} size={20} />
        <Text className='text-xs text-gray-500'>
          Nearby •{' '}
          <Text>
            {address.length > max_length
              ? address.substring(0, max_length - 3) + '...'
              : address}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
