import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            50: '#E5F0FF',
            100: '#B8D5FF',
            200: '#8ABAFF',
            300: '#5C9FFF',
            400: '#2E84FF',
            500: '#0069FF',
            600: '#0054CC',
            700: '#003F99',
            800: '#002A66',
            900: '#001533',
        },
    },
    fonts: {
        heading: '"Montserrat", sans-serif',
        body: '"Open Sans", sans-serif',
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.800',
            },
        },
    },
});

export default theme;