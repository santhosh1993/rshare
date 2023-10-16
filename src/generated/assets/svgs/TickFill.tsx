// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgTickFill = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 24 24" fill="white" ref={ref}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.6605 10.0607L15.5998 9L10.7283 13.8716L8.06066 11.2039L7 12.2646L10.3747 15.6393C10.57 15.8346 10.8866 15.8346 11.0819 15.6393L16.6605 10.0607Z"
            fill="#109E38"
          />
        </Svg>
      );
    },
  ),
);
export default SvgTickFill;
