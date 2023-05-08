import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id]{..., restaurants[]->{
    ..., dishes[]->, type->{name}}}[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <View>
      <View className='mt-4 px-4 flex-row items-center justify-between'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='px-4 text-xs text-gray-500'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            dishes={restaurant.dishes}
            genre={restaurant.type?.name}
            title={restaurant.name}
            short_description={restaurant.short_description}
            rating={restaurant.rating}
            lat={restaurant.lat}
            long={restaurant.long}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
