import {
  Box,
  Button,
  createStyles,
  createTheme,
  makeStyles,
  Paper,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import TextBox from "../components/TextBox/TextBox";
import TitleBox from "../components/TitleBox/TitleBox";
import MyButton from "../components/Button/MyButton";
import SlideBox from "../components/SlideBox/SlideBox";
import BorderBox from "../components/BorderBox/BorderBox";
import IconCard from "../components/IconCard/IconCard";

const LoremIpsum: string =
  "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?";

const ABOUT: string =
  "1.5 years experience in full stack development, and I’m able to work on full stack and deliver mature application product from databases, backend services, APIs to frontend UI/UX design and their implementation. \n In details: 4 months experience as an API Automation developer at RBC. 8 months experience in the development of a blockchain integrated system and website application. 4 months in Multi-Modal Analysis, object scouting through RGB-D sensors and VR Model Reconstruction research.";
const SELF_INTRO: string =
  "I am a passionate full-stack developer and student at Simon Fraser University";

export default function FirstPost() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${"/resources/images/profile_hd.jpg"})`,
          WebkitFilter: "blur(0px)",
          position: "fixed",
          left: "250px",
          right: "100px",
          boxShadow: "0 0 24px 32px black inset",
          zIndex: "-1",
        }}
      ></Box>

      <Box
        display="flex"
        justifyContent="space-between"
        key="upper_bar"
        padding="16px"
        paddingTop="8px"
        paddingBottom="8px"
        position="fixed"
        width="100%"
        top="0px"
        sx={{
          backgroundColor: "rgba(30, 30, 30, 0.4)", // Grey background with 0.5 alpha
        }}
        zIndex="1000"
      >
        <Button
          variant="text"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            // borderRadius: "0",
            // borderColor: "white",
            // border: "1px solid rgba(255, 255, 255, 0.6)",
          }}
        >
          LINKEDIN
        </Button>

        <Box key="TopRightToolBar" display="flex" gap="24px">
          <Button
            variant="text"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Tech Stack
          </Button>
          <Button
            variant="text"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Work Experience
          </Button>
        </Box>
      </Box>

      <Box
        key="paper"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "50vh",
          rowGap: "1000px",
          left: "0",
          right: "0",
          zIndex: "20",
          overflow: "scroll",
        }}
      >
        <TitleBox />
        <TextBox text={SELF_INTRO} />
        <SlideBox text={ABOUT} />

        <BorderBox>
          <Typography
            variant="h3"
            fontWeight="bold"
            padding="24px"
            paddingBottom="0px"
            color="rgba(255, 255, 255, 0.9)"
          >
            Tech Stack
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            paddingTop="16px"
            gap="8px"
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="rgba(255, 255, 255, 0.9)"
              paddingLeft="32px"
              paddingTop="32px"
            >
              Language
            </Typography>
            <IconCard
              imgPath="/resources/images/typescript.png"
              title="Typescript"
              text="Description for Typescript"
            />
            <IconCard
              imgPath="/resources/images/python.png"
              title="Python"
              text="Description for Python"
            />
            <IconCard
              imgPath="/resources/images/C++.png"
              title="C++"
              text="Description for C++"
            />
            <IconCard
              imgPath="/resources/images/Haskell.png"
              title="Haskell"
              text="Description for Haskell"
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              color="rgba(240, 240, 240, 0.9)"
              paddingLeft="32px"
              paddingTop="32px"
            >
              Front-end
            </Typography>
            <IconCard
              imgPath="/resources/images/React-icon.svg.png"
              title="ReactJs"
              text="5 months professional development experience in component and page designing, implementing and testing"
            />
            <IconCard
              imgPath="/resources/images/MUI.png"
              title="Material UI"
              text="Description for Material UI"
            />

            <Typography
              variant="h4"
              fontWeight="bold"
              color="rgba(240, 240, 240, 0.9)"
              paddingLeft="32px"
              paddingTop="32px"
            >
              Database
            </Typography>
            <IconCard
              imgPath="/resources/images/mysql.png"
              title="MySQL"
              text="Description for MySQL"
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              color="rgba(240, 240, 240, 0.9)"
              paddingLeft="32px"
              paddingTop="32px"
            >
              Frameworks
            </Typography>
            <IconCard
              imgPath="/resources/images/Nodejs.png"
              title="Node.js"
              text="Description for Node.js"
            />
          </Box>
        </BorderBox>
      </Box>
    </>
  );
}
