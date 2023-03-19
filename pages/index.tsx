import { Box, createStyles, createTheme, makeStyles, Paper, Theme, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link'
import TextBox from './components/TextBox/TextBox';
import TitleBox from './components/TitleBox/TitleBox';
import FirstPost from './portfolio-pages/Home';

const LoremIpsum:string = "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?"

export default function root() {
  return (<FirstPost/>);
}