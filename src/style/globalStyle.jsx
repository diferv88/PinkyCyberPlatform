import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
li,
ol{
  list-style-type:none;
  list-style: none;
  padding: 0;
}
li::marker {
  display: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html {
  color: ${({ theme }) => theme.color.brandColors.base.Base700};
 background-color: #F8F9FA;
font-family: 'Sora', sans-serif;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  margin: 0;
}

img,
picture,
svg {
  max-width: 100%;
  display: block;
}

svg {
  fill: currentColor;
}

svg:not(:root) {
  overflow: hidden;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
a {
  text-decoration: none;
  color: inherit;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
 .server-status {
      position: relative;
      background: #f0f2f3;
      border: 2px solid #f0f2f3;
      border-radius: 6px;
      width: 20px;
      height: 20px;
      &::after {
        content: " ";
        border-radius: 50%;
        position: absolute;
        width: 10px;
        height: 10px;
        background: red;
        left: 20%;
        top: 20%;
      }
      &.GREEN::after {
        background: #0fb5ae;
      }
      &.YELLOW::after {
        background: rgba(249, 178, 8, 1);
      }
      &.RED::after {
        background: rgba(234, 56, 41, 1);
      }
    }
.section-style{
  border-bottom: 1px solid #E1E4E7;
  padding: 1rem 0;
margin-bottom: 2rem;

}
`;
