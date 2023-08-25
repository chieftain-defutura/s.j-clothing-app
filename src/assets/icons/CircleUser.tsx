import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillOpacity={0.4}
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0ZM6.667 17.637V17.5A3.337 3.337 0 0 1 10 14.167a3.337 3.337 0 0 1 3.333 3.333v.137a8.285 8.285 0 0 1-3.333.696 8.286 8.286 0 0 1-3.333-.696Zm8.27-.928A5.008 5.008 0 0 0 10 12.5a5.008 5.008 0 0 0-4.938 4.21A8.328 8.328 0 0 1 1.667 10c0-4.594 3.738-8.332 8.333-8.332 4.595 0 8.333 3.738 8.333 8.333a8.328 8.328 0 0 1-3.395 6.71ZM10 4.167A3.337 3.337 0 0 0 6.667 7.5 3.337 3.337 0 0 0 10 10.833 3.337 3.337 0 0 0 13.333 7.5 3.337 3.337 0 0 0 10 4.167Zm0 5c-.92 0-1.667-.748-1.667-1.667 0-.92.748-1.667 1.667-1.667.92 0 1.667.748 1.667 1.667 0 .92-.748 1.667-1.667 1.667Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
