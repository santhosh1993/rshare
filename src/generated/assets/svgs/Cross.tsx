// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgCross = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 17 17" fill="none" ref={ref}>
          <Path
            d="M2.05025 0.989258L0.989594 2.04992L7.91924 8.97956L0.989594 15.9092L2.05025 16.9699L8.9799 10.0402L15.9095 16.9699L16.9702 15.9092L10.0406 8.97956L16.9702 2.04992L15.9095 0.989258L8.9799 7.9189L2.05025 0.989258Z"
            fill="#1A1A1A"
          />
        </Svg>
      );
    },
  ),
);
export default SvgCross;
