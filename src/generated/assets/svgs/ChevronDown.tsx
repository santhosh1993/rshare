// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgChevronDown = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 19 10" fill="none" ref={ref}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0312 1.26562L16.9706 0.204956L9.01585 8.16055L1.06066 0.204956L0 1.26562L8.13173 9.39734C8.58937 9.85499 9.31359 9.88359 9.80456 9.48315L9.8995 9.39734L18.0312 1.26562Z"
            fill="#1A1A1A"
          />
        </Svg>
      );
    },
  ),
);
export default SvgChevronDown;
