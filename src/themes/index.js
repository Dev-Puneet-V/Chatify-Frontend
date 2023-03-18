import { createTheme } from "@mui/material/styles";

const rootTheme = createTheme({
    typography: {
        fontFamily: [
            "Work Sans", 
            "sans-serif",
            "Roboto",
            "Helvetica Neue",
            "Arial"
        ]
    },
    palette: {
        // primary: {
        //     main: {
                
        //     },
        //     light: {

        //     },
        //     dark: {

        //     }
        // },
        // secondary: {
        //     main: {

        //     },
        //     light: {

        //     },
        //     dark: {
                
        //     }
        // },
        // error: {
        //     main: {

        //     },
        //     light: {

        //     },
        //     dark: {
                
        //     }
        // },
        // warning: {
        //     main: {

        //     },
        //     light: {

        //     },
        //     dark: {
                
        //     }
        // },
        // info: {
        //     main: {

        //     },
        //     light: {

        //     },
        //     dark: {
                
        //     }
        // },
        // success: {
        //     main: {

        //     },
        //     light: {

        //     },
        //     dark: {
                
        //     }
        // },
        customColors: {
            dark: '#1E1E1E',
            grey: '#636363',
            darkGrey: '#6B7C85',
            mediumGrey: '#CFD5D7',
            lightGrey: '#F0F2F5',
            midGrey: '#D4D4D4',
            violetGrey: '#BDBDBD',
            mediumGreen: '#25D366',
            lightGreen: '#D9FDD3',
            mediumRed: '#EA0038',
            violet: '#C310C7',
            white: '#FFFFFF'
        },
    },
    spacing: (factor) => `${0.25 * factor}rem`
  });

export {
    rootTheme
}