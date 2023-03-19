import { Box, createStyles, createTheme, makeStyles, Paper, Theme, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link'
import TitleBox from '../components/TitleBox/TitleBox';

const theme = createTheme();

export default function FirstPost() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box 
        sx={{
          height: '100%',
          width: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${"/resources/images/profile_hd.jpg"})`,
          WebkitFilter: 'blur(0px)',
          position: 'fixed',
          left: '250px',
          right: '100px',
          boxShadow: '0 0 24px 32px black inset',
          zIndex: '1',
        }}>
      </Box>
      <Box
        key="paper"
        sx={{
          position: 'fixed',
          height: '-webkit-fill-available',
          left: '0',
          right: '0',
          zIndex: '2',
          overflow: 'scroll',
        }}    
      >
          <TitleBox/>
          <Box
            sx={{
              display: 'block',
              padding: '24px',
              color: 'white',
              fontWeight: 'bold',
              zIndex: '2',
            }}>          
              <Typography
                variant='h2'
                fontWeight='bold'
                >
              </Typography>
            </Box>
          </Box>
    </ThemeProvider>
    </>
  );
}