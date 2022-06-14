import {extendTheme} from '@chakra-ui/react';

const styles = {
  global: (props) => ({
    body: {
      bg: '#fff',
    },
  }),
};

const fonts = {
  heading: '',
};

const colors = {
  // example: '#88ccca'
};

const theme = extendTheme({styles, fonts, colors});
export default theme;
