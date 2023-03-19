import { Box, createStyles, createTheme, makeStyles, Paper, Theme, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link'
import TitleBox from '../components/TitleBox/TitleBox';


export default function FirstPost() {
  return (
    <>
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
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          left: '0',
          right: '0',
          zIndex: '2',
          overflow: 'scroll',
        }}    
      >
        <TitleBox/>
        <Box
          key="titleBox"
          sx={{
            display: "block",
            padding: "24px",
            backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
            color: "white",
            position: 'relative',
            fontWeight: "bold",
            border: "1px solid #f1f1f1",
            left: '50%',
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            width: "60%",
            textAlign: "center",
          }}
        >
            <Typography
              variant='h6'
              fontWeight='bold'
              >
              I am a computer science student currently studying at Simon Fraser University.
            </Typography>
        </Box>
     </Box>
    </>
  );
}