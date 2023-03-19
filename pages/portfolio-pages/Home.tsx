import { Box, createStyles, createTheme, makeStyles, Paper, Theme, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link'
import TextBox from '../components/TextBox/TextBox';
import TitleBox from '../components/TitleBox/TitleBox';

const LoremIpsum:string = "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?"

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
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '50vh',
          rowGap: '280px',
          left: '0',
          right: '0',
          zIndex: '2',
          overflow: 'scroll',
        }}    
      >
        <TitleBox/>
        <TextBox text="I am a computer science student currently studying at Simon Fraser University."/>
        <TextBox text={LoremIpsum}/>

        

     </Box>
    </>
  );
}