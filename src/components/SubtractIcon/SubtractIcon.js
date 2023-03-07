import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SubtractIcon = () => (
  <Svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    testID="subtract-icon"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.474V10l10-5L0 0v2.526L4.947 5 0 7.474Z"
      fill="#070707"
    />
  </Svg>
)

export default SubtractIcon
