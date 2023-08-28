import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CardList from '../Components/CardList';

export default function Home() {
  const [cardlist, setCardList] = useState([
    {
      img: '',
      address: 'gurgaon',
      description:
        'bla anskcjsnadvlnalvdnaskdl na hilalf kasn aka,ksd n,asdnk,as k',
      price: 5000,
      rating: 1,
    },
    {
      img: '',
      address: 'noida',
      description: 'h fakhfhlsh lfl hiufhauis l ahfailh flas alh filuahsal fha',
      price: 5200,
      rating: 5,
    },
    {
      img: '',
      address: 'nagpur',
      description: ' hlhlahF H lhfliash  hflah lfa hlhuisdhkf ',
      price: 2500,
      rating: 2,
    },
    {
      img: '',
      address: 'delhi',
      description: 'uihdifl iaiuh iuahlhf isdhi liah l ',
      price: 3500,
      rating: 5,
    },
    {
      img: '',
      address: 'amritsar',
      description: 'ei hahiluhfiluahsf h l lh',
      price: 12500,
      rating: 4,
    },
  ]);

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '5%',
        backgroundColor: '#282828',
        width: '100%',
      }}>
      <Text style={{fontSize: 20, color: '#ffa115'}}>Our Homes</Text>
      <View>
        <CardList cardlist={cardlist} />
      </View>
    </View>
  );
}
