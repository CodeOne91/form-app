import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background: ${(props) => props.theme.BACKGROUND_COLOR};
        color: ${(props) => props.theme.TEXT_COLOR};
        letter-spacing: .6px;
    }
    :root {
  --toastify-color-light: ${(props) => props.theme.BACKGROUND_COLOR};
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: white;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: ${(props) => props.theme.BUTTON_COLOR};
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: white
  --toastify-text-color-dark: #fff;

  //Used only for colored theme
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // Used when no type is provided
  // toast("**hello**")
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  // Used when no type is provided
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}

    
`;
