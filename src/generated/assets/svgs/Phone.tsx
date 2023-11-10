// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgPhone = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 18 18" ref={ref}>
          <Path
            d="M9,1.0833C4.6333,1.0833 1.0833,4.6333 1.0833,9C1.0833,13.3667 4.6333,16.9167 9,16.9167C13.3667,16.9167 16.9167,13.3667 16.9167,9C16.9167,4.6333 13.3667,1.0833 9,1.0833Z"
            strokeWidth={0.5}
            fill="#4DA1FF"
            stroke="#FFFFFF"
            fillRule="nonZero"
          />
          <Path
            d="M13.2333,11.969C13.0833,12.3357 12.8166,12.7024 12.6333,12.8857C11.6666,13.8524 9.0833,13.019 6.9666,10.9024C4.85,8.7857 4.0166,6.2024 4.9833,5.2357C5.15,5.069 5.5333,4.8024 5.9,4.6357C6.1666,4.519 6.4833,4.6024 6.6666,4.8357L7.7166,6.169C7.9333,6.4357 7.9,6.8357 7.6333,7.069C7.35,7.3024 7.1666,7.469 7.1333,7.519C6.7333,7.919 7.3166,8.7857 8.2,9.669C9.0833,10.5524 9.95,11.1524 10.35,10.7357C10.4,10.6857 10.5666,10.5024 10.8,10.2357C11.0333,9.969 11.4166,9.9357 11.7,10.1524L13.0333,11.2024C13.2666,11.369 13.35,11.6857 13.2333,11.969Z"
            strokeWidth={1}
            fill="#FFFFFF"
            fillRule="nonZero"
            stroke="#00000000"
          />
        </Svg>
      );
    },
  ),
);
export default SvgPhone;
