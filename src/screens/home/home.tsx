import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {ShareCenter} from '../share-center/ShareCenter';
import {More} from '../more/more';
import SvgShareCenter from '@src/generated/assets/svgs/ShareCenter';
import SvgMoreTab from '@src/generated/assets/svgs/MoreTab';
import SvgQrScanner from '@src/generated/assets/svgs/QrScanner';

const Tab = createMaterialBottomTabNavigator();

interface TabIconProps {
  route: {name: string};
  color: string;
  isFocused: boolean;
}

export const Home = () => {
  const shareCenter = useCallback(() => {
    return <ShareCenter />;
  }, []);

  const more = useCallback(() => {
    return <More source={''} hideBackButton={true} />;
  }, []);

  const getTabBarIcon = useCallback(
    ({route, color, isFocused}: TabIconProps) => {
      const svgColor = isFocused ? '#1a1a1a' : '#aaa';
      if (route.name === 'Home') {
        return <SvgShareCenter style={styles.tabIconImage} fill={svgColor} />;
      } else if (route.name === 'More') {
        return <SvgMoreTab style={styles.tabIconImage} fill={svgColor} />;
      } else if (route.name === 'Scan') {
        return <SvgQrScanner style={styles.tabIconImage} fill={svgColor} />;
      }
      return <SvgShareCenter style={styles.tabIconImage} fill={svgColor} />;
    },
    [],
  );

  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#fff'}}
      activeColor="#1a1a1a"
      inactiveColor="#aaa"
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) =>
          getTabBarIcon({route, color, isFocused: focused}),
      })}>
      <Tab.Screen name="Scan" component={more} />
      <Tab.Screen name="Home" component={shareCenter} />
      <Tab.Screen name="More" component={more} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabIconImage: {width: 24, height: 24},
});
