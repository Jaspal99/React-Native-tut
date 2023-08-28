import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Card from './Card';
export default function CardList({cardlist}) {
  useEffect(() => {
    console.log('cardlist --- ', cardlist);
  }, []);
  return (
    <ScrollView>
      <View>
        {cardlist?.map(card => {
          return <Card card={card} />;
        })}
      </View>
    </ScrollView>
  );
}
