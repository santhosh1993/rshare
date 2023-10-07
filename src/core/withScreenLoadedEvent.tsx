import React, {useEffect} from 'react';

import {useIsFocused} from '@react-navigation/native';

export function withScreenLoadedEvent<P extends Object>(
  name: string,
  Component: React.ComponentType<P>,
): React.ComponentType<P> {
  return (props: P) => {
    const isFocused = useIsFocused();

    // Send an event whenever React Navigation focuses this screen
    useEffect(() => {
      //sendScreenLoadedEvent(name, undefined, shouldFireEvent);
    }, [isFocused]);

    return <Component {...props} />;
  };
}
