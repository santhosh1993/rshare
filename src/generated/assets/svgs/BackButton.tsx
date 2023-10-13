// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgBackButton = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 24 24" fill="none" ref={ref}>
          <Path
            d="M13.5761 4.06066L12.5154 3L4.38369 11.1317L4.29789 11.2267C3.89745 11.7176 3.92605 12.4418 4.38369 12.8995L12.5154 21.0312L13.5761 19.9706L6.35516 12.75H19.9998V11.25H6.38595L13.5761 4.06066Z"
            fill="white"
          />
        </Svg>
      );
    },
  ),
);
export default SvgBackButton;
