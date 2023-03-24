import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      pinkColor: string;
      blueColor: string;
      whiteColor: string;
      blackColor: string;
      greenColor: string;
      greyColor: string;
      darkBlueColor: string;
    };
    text: {
      greyColor: string;
      greenColor: string;
    };
    icons: {
      greyColor: string;
      whiteColor: string;
    };
    border: {
      darkGrey: string;
      ligthGrey: string;
    };
    font: {
      light: string;
      bold: string;
    };
  }
}
