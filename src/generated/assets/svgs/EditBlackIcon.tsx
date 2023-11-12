// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgEditBlackIcon = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 12 12" fill="none" ref={ref}>
          <Path
            d="M7.17943 0.87447C8.02557 0.0283342 9.39743 0.0283342 10.2436 0.87447L10.715 1.34587C11.5611 2.19201 11.5611 3.56387 10.715 4.41L4.3204 10.8046C4.17966 10.9453 3.99318 11.031 3.79471 11.0462L1.24016 11.2416C0.781261 11.2767 0.380794 10.9332 0.345689 10.4743C0.342435 10.4317 0.342453 10.389 0.345743 10.3465L0.543161 7.79414C0.558492 7.59593 0.644181 7.40972 0.784757 7.26915L7.17943 0.87447ZM1.51926 8.14053L1.35757 10.2296L3.44726 10.0692L1.51926 8.14053ZM7.19726 2.26987L2.12993 7.3372L4.25126 9.45854L9.31859 4.3912L7.19726 2.26987ZM9.53646 1.58158C9.08084 1.12596 8.34215 1.12596 7.88654 1.58158L7.90526 1.5632L10.0264 3.68397C10.4165 3.2761 10.4534 2.65486 10.1373 2.20655L10.0728 2.12338L10.0079 2.05298L9.53646 1.58158Z"
            fill="#1A1A1A"
          />
        </Svg>
      );
    },
  ),
);
export default SvgEditBlackIcon;
