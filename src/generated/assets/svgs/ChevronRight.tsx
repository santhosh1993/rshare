// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgChevronRight = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 16 16" fill="none" ref={ref}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.51045 2L4.80334 2.70711L10.1071 8.01025L4.80334 13.3137L5.51045 14.0208L10.9316 8.59966C11.2367 8.29457 11.2558 7.81175 10.9888 7.48444L10.9316 7.42115L5.51045 2Z"
            fill={props.fill}
          />
        </Svg>
      );
    },
  ),
);
export default SvgChevronRight;
