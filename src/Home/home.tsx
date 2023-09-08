import React, {FC} from 'react';
import {View} from 'react-native';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return <View style={{flex: 1, backgroundColor: 'red'}} />;
};
