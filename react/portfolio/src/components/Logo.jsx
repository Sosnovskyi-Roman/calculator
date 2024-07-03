// import React from "react";
// <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
//   <rect width="100%" height="100%" fill="#fff" />
//   <text
//     x="50%"
//     y="40%"
//     dominant-baseline="middle"
//     text-anchor="middle"
//     font-family="Arial"
//     font-size="24"
//     fill="#005f73"
//     opacity="0"
//   >
//     R
//     <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" />
//     <animate attributeName="y" from="30%" to="40%" dur="1s" fill="freeze" />
//   </text>
//   <text
//     x="50%"
//     y="40%"
//     dominant-baseline="middle"
//     text-anchor="middle"
//     font-family="Arial"
//     font-size="24"
//     fill="#0a9396"
//     dx="12"
//     opacity="0"
//   >
//     {"{S}"}
//     <animate
//       attributeName="opacity"
//       from="0"
//       to="1"
//       dur="1s"
//       begin="1s"
//       fill="freeze"
//     />
//     <animate
//       attributeName="y"
//       from="30%"
//       to="40%"
//       dur="1s"
//       begin="1s"
//       fill="freeze"
//     />
//   </text>
//   <text
//     x="50%"
//     y="70%"
//     dominant-baseline="middle"
//     text-anchor="middle"
//     font-family="Arial"
//     font-size="9"
//     fill="#94d2bd"
//     opacity="0"
//   >
//     Junior Developer
//     <animate
//       attributeName="opacity"
//       from="0"
//       to="1"
//       dur="1s"
//       begin="2s"
//       fill="freeze"
//     />
//   </text>
// </svg>;

// export default Logo;

// src/components/Logo.js
import React from "react";

const Logo = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#333" />
    <text
      x="25%"
      y="40%"
      dominant-baseline="middle"
      text-anchor="middle"
      font-family="Arial"
      font-size="40"
      fill="#005f73"
      opacity="0"
    >
      R
      <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" />
      <animate attributeName="y" from="30%" to="40%" dur="1s" fill="freeze" />
    </text>
    <text
      x="45%"
      y="40%"
      dominant-baseline="middle"
      text-anchor="middle"
      font-family="Arial"
      font-size="40"
      fill="#0a9396"
      dx="12"
      opacity="0"
    >
      S
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="1s"
        begin="1s"
        fill="freeze"
      />
      <animate
        attributeName="y"
        from="30%"
        to="40%"
        dur="1s"
        begin="1s"
        fill="freeze"
      />
    </text>
    <text
      x="45%"
      y="70%"
      dominant-baseline="middle"
      text-anchor="middle"
      font-family="Arial"
      font-size="6"
      fill="#94d2bd"
      opacity="0"
    >
      Web Developer
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="1s"
        begin="2s"
        fill="freeze"
      />
    </text>
  </svg>
);

export default Logo;
