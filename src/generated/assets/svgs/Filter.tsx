// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgFilter = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 16 10" fill="none" ref={ref}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5009 0V1.25H0.501617V0H15.5009ZM13.0017 4.16667V5.41667H3.00038V4.16667H13.0017ZM9.66271 9.58333V8.33333H6.33522V9.58333H9.66271Z"
            fill="#1A1A1A"
          />
        </Svg>
      );
    },
  ),
);
export default SvgFilter;
