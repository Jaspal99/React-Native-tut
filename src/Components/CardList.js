import React, {useEffect, useRef} from 'react';
import {Button, ScrollView, View} from 'react-native';
import Card from './Card';
import style from './common/styles/style';
export default function CardList({cardlist}) {
  useEffect(() => {
    console.log('cardlist --- ', cardlist);
  }, []);
  const scrollViewRef = useRef(null);

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };
  return (
    <View style={{marginBottom: '10%'}}>
      <ScrollView ref={scrollViewRef}>
        <View>
          {cardlist?.map((card, index) => {
            return <Card key={index} id={index} card={card} />;
          })}
        </View>
        <Button
          color={'#ffa115'}
          style={{
            backgroundColor: '#ffa115 ',
            color: 'black ',
          }}
          title="Scroll To Top"
          onPress={handleScrollToTop}
        />
      </ScrollView>
    </View>
  );
}
