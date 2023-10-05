import {useMemo} from 'react';
import {BaseRouteParams, Routes} from '../router/routes';
import {
  CommonActions,
  StackActions,
  TabActions,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native';
import findLastIndex from 'lodash/findLastIndex';

export type RedirectionProps<Route extends Routes> = {
  route: Route;
  params: BaseRouteParams[Route];
};

export const useNavigation = () => {
  const {
    dispatch,
    goBack,
    canGoBack,
    setParams,
    setOptions,
    getId,
    getState,
    getParent,
    addListener,
    isFocused,
  } = useNativeNavigation();

  return useMemo(
    () => ({
      stack: {
        push<K extends Routes>({route, params}: RedirectionProps<K>) {
          dispatch(StackActions.push(route, params));
        },

        pop(count: number) {
          dispatch(StackActions.pop(count));
        },

        popToTop() {
          dispatch(StackActions.popToTop());
        },

        replace<K extends Routes>({route, params}: RedirectionProps<K>) {
          dispatch(StackActions.replace(route, params));
        },
      },

      tabs: {
        jumpTo<K extends Routes>({route, params}: RedirectionProps<K>) {
          dispatch(TabActions.jumpTo(route, params));
        },
      },

      global: {
        navigate<K extends Routes>({route, params}: RedirectionProps<K>) {
          dispatch(StackActions.push(route, params));
        },

        goBack,

        resetToRoute(route: Routes) {
          dispatch(internalState => {
            const routeIndex = findLastIndex(
              internalState.routes,
              ({name}) => name === route,
            );
            if (routeIndex > -1) {
              return CommonActions.reset({
                ...internalState,
                routes: internalState.routes.slice(0, routeIndex + 1),
                index: routeIndex,
              });
            }
            return CommonActions.reset(internalState);
          });
        },
      },

      options: {
        stack: setOptions,
        tabs: setOptions,
        drawer: setOptions,
      },

      utils: {
        setParams,

        canGoBack,

        getId,

        getState,

        getParent,

        addListener,

        isFocused,
      },
    }),
    [
      addListener,
      canGoBack,
      dispatch,
      getId,
      getParent,
      getState,
      goBack,
      isFocused,
      setOptions,
      setParams,
    ],
  );
};
