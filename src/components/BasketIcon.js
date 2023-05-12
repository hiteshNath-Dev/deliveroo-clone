import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItem, selectBaskTotal } from '../redux/slice/basketSlice';
import Currency from 'react-currency-formatter';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItem);
  const basketTotal = useSelector(selectBaskTotal);

  if (items.length === 0) return null;

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className='flex-row justify-between bg-[#00CCBB] p-4 mx-5 rounded-lg items-center'
      >
        <Text className='text-white font-extrabold text-lg bg-[#01A296] px-2'>
          {items.length}
        </Text>
        <Text className='text-white font-extrabold text-lg text-center'>
          View Basket
        </Text>
        <Text className='text-white font-extrabold text-lg'>
          <Currency quantity={basketTotal} currency='INR' />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
