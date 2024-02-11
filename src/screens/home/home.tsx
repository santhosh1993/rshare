import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {ShareCenter} from '../share-center/ShareCenter';
import {MoreComponent} from '../more/more';
import SvgShareCenter from '@src/generated/assets/svgs/ShareCenter';
import SvgMoreTab from '@src/generated/assets/svgs/MoreTab';
import SvgQrScanner from '@src/generated/assets/svgs/QrScanner';
import {BottomNavigation} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import {colors} from '@common/colors';
import {QRScanner} from '../qr-scanner/qr-scanner';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  route: {name: string};
  color: string;
  focused: boolean;
}

export const Home = () => {
  const shareCenter = useCallback(() => {
    return <ShareCenter />;
  }, []);

  const more = useCallback(() => {
    return <MoreComponent source={'tabs'} hideBackButton={true} />;
  }, []);

  const qrScanner = useCallback(() => {
    return <QRScanner />;
  }, []);

  const getTabBarIcon = useCallback(({route, focused}: TabIconProps) => {
    const svgColor = focused
      ? colors.bottomBar.active
      : colors.bottomBar.inactive;
    if (route.name === 'Home') {
      return <SvgShareCenter style={styles.tabIconImage} fill={svgColor} />;
    } else if (route.name === 'More') {
      return <SvgMoreTab style={styles.tabIconImage} fill={svgColor} />;
    } else if (route.name === 'Scan') {
      return <SvgQrScanner style={styles.tabIconImage} fill={svgColor} />;
    }
    return <SvgShareCenter style={styles.tabIconImage} fill={svgColor} />;
  }, []);

  const tabBar = useCallback(
    ({navigation, state, descriptors, insets}) => (
      <BottomNavigation.Bar
        navigationState={state}
        safeAreaInsets={insets}
        shifting={false}
        activeColor={colors.bottomBar.active}
        inactiveColor={colors.bottomBar.inactive}
        onTabPress={({route, preventDefault}) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            preventDefault();
          } else {
            navigation.dispatch({
              ...CommonActions.navigate(route.name, route.params),
              target: state.key,
            });
          }
        }}
        renderIcon={getTabBarIcon}
        getLabelText={({route}) => {
          return route.name;
        }}
        theme={{
          colors: {
            secondaryContainer: colors.bottomBar.active + '20',
          },
        }}
        style={styles.bottomBar}
      />
    ),
    [getTabBarIcon],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={tabBar}
      initialRouteName="Home">
      <Tab.Screen name="Scan" component={qrScanner} />
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
  bottomBar: {backgroundColor: '#fff'},
});
