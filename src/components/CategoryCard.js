import { Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { urlFor } from '../../sanity';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        source={{
          uri: urlFor(imgUrl).width(200).url(),
        }}
        className='h-20 w-20 rounded'
      />
      <Text className='text-white font-bold absolute bottom-1 left-1'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
