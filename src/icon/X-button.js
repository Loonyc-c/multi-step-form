import * as React from "react"
const XButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#202124" rx={12} />
    <path
      fill="#fff"
      d="m15.5 9.205-.705-.705L12 11.295 9.205 8.5l-.705.705L11.295 12 8.5 14.795l.705.705L12 12.705l2.795 2.795.705-.705L12.705 12 15.5 9.205Z"
    />
  </svg>
)
export default XButton
