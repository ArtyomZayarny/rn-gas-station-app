import {Svg, Path, Circle} from 'react-native-svg';
import React from 'react';

const PencilIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Circle cx="8" cy="8" r="8" fill="#00B488" />
      <Path
        d="M9.91017 4.77464C10.0527 4.63209 10.124 4.56082 10.195 4.51334C10.4868 4.31837 10.8674 4.31837 11.1592 4.51334C11.2302 4.56082 11.3015 4.63209 11.444 4.77464C11.5866 4.91718 11.6579 4.98846 11.7053 5.05951C11.9003 5.35132 11.9003 5.73184 11.7053 6.02364C11.6579 6.0947 11.5866 6.16597 11.444 6.30851L6.74394 11.0086C6.62917 11.1234 6.57178 11.1808 6.50519 11.2263C6.43859 11.2719 6.36431 11.3046 6.21575 11.3699L5.81693 11.5454C4.95508 11.9246 4.52415 12.1142 4.3143 11.9044C4.10445 11.6945 4.29405 11.2636 4.67327 10.4018L4.84874 10.0029C4.91411 9.85437 4.9468 9.78009 4.99235 9.7135C5.03791 9.6469 5.09529 9.58952 5.21007 9.47475L9.91017 4.77464Z"
        fill="#00B488"
        stroke="#FCFFFE"
        stroke-width="0.86769"
        stroke-linecap="round"
      />
      <Path
        d="M8.72021 5.94921L10.2541 7.48309"
        stroke="#FCFFFE"
        stroke-width="0.86769"
      />
    </Svg>
  );
};

export default PencilIcon;
