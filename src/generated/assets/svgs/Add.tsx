// @ts-nocheck ;
import React, {forwardRef, memo} from 'react';
import type {Component, ForwardedRef} from 'react';
import Svg, {SvgProps, G, Circle, Rect, Path} from 'react-native-svg';
const SvgAdd = memo(
  forwardRef(
    (props: SvgProps, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
      return (
        <Svg {...props} viewBox="0 0 32 32" fill="none" ref={ref}>
          <G id="add-1">
            <Circle id="Oval" cx={16} cy={16} r={16} fill="#F5F5F5" />
            <G id="add-2">
              <Rect
                id="Rectangle"
                x={4}
                y={4}
                width={24}
                height={24}
                fill="white"
                fillOpacity={0.01}
              />
              <Path
                id="Combined-Shape"
                d="M16.75 8V15.253L24 15.2535V16.7535L16.75 16.753V24.0035H15.25V16.753L8 16.7535V15.2535L15.25 15.253V8H16.75Z"
                fill="#1A1A1A"
              />
            </G>
          </G>
        </Svg>
      );
    },
  ),
);
export default SvgAdd;
