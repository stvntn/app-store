
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      black: {
        main: '#000000'
      },
      white: {
        main: '#FFFFFF'
      }
    },
    typography: {
      fontFamily: [
        'Futura',
        'Poppins',
      ].join(','),
   },
   components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#EF812E',
            color:'#fff',
            borderRadius: '8px',
            justifyContent: 'space-between',
            '& .MuiList-root': {
              height: '100%'
            }
          }
        }
      },

    }
});

export default theme;








