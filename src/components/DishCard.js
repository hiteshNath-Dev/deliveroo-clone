import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../../sanity';
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishCard = ({ id, name, description, price, imgUrl }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        className={`bg-white border-gray-200 border p-4 ${
          isPressed && 'border-b-0'
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className='flex-row'>
          <View className='pr-2 flex-1'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>
              <Currency quantity={price} currency='INR' />
            </Text>
          </View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: '#F3F3F4',
            }}
            source={{ uri: urlFor(imgUrl).url() }}
            className='h-20 w-20 bg-gray-300 p-4'
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className='flex-row items-center space-x-2 pb-3 bg-white px-4'>
          <TouchableOpacity>
            <MinusCircleIcon color='#00CCBB' size={40} />
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <PlusCircleIcon color='#00CCBB' size={40} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishCard;
