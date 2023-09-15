import {
  NavigationContainer,
  NavigationContainerRef,
  Route,
} from '@react-navigation/native'
import {Home} from '@src/home/home';

function MatchRoute() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}
