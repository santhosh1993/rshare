// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgMoreTab = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 -960 960 960" ref={ref}>
          <Path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
        </Svg>
      );
    },
  ),
);
export default SvgMoreTab;
