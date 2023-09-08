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
        <Box key="TopLeftToolBar" display="flex" gap="24px">
          <Button
            variant="text"
            href="https://www.linkedin.com/in/dingshuo-yang-062175214/"
            target="_blank"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              // borderRadius: "0",
              // borderColor: "white",
              // border: "1px solid rgba(255, 255, 255, 0.6)",
            }}
          >
            LINKEDIN
          </Button>
          <Button
            variant="text"
            href="https://github.com/HarukaYang"
            target="_blank"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              // borderRadius: "0",
              // borderColor: "white",
              // border: "1px solid rgba(255, 255, 255, 0.6)",
            }}
          >
            GITHUB
          </Button>
        </Box>

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
          rowGap: "800px",
          left: "0",
          right: "0",
          zIndex: "20",
          overflow: "scroll",
        }}
      >
        <TitleBox />
        <TextBox text={SELF_INTRO} />
        {/* <SlideBox text={ABOUT} /> */}

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
              text="Utilized extensively in both front-end and back-end development, including user-friendly React components and APIs."
            />
            <IconCard
              imgPath="/resources/images/python.png"
              title="Python"
              text="Professional experience in developing a blockchain integrated system, backend services, and web scrapers. Rich academic experience in data science including data mining and analysis."
            />
            <IconCard
              imgPath="/resources/images/C++.png"
              title="C++"
              text="Used in academic research for object detection and VR scene reconstruction through RGB-D sensors."
            />
            <IconCard
              imgPath="/resources/images/Haskell.png"
              title="Haskell"
              text="Basic familiarity, primarily used in academic settings for functional programming tasks."
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
              title="React"
              text="5 months of professional experience in component and page design, implementation, and testing. Proficient in best practices."
            />
            {/* <IconCard
              imgPath="/resources/images/nextjs.jpeg"
              title="Next.js"
              text="Used in conjunction with React for server-side rendering and enhancing SEO."
            /> */}
            <IconCard
              imgPath="/resources/images/MUI.png"
              title="Material UI"
              text="Implemented user-friendly interfaces adhering to Material Design principles."
            />
            <IconCard
              imgPath="/resources/images/tailwind.png"
              title="Tailwind"
              text="Used for rapid UI development, focusing on utility-first CSS classes."
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              color="rgba(240, 240, 240, 0.9)"
              paddingLeft="32px"
              paddingTop="32px"
            >
              Back-end
            </Typography>
            <IconCard
              imgPath="/resources/images/Nodejs.png"
              title="Node.js"
              text="Applied in API automation tasks and back-end services. Also employed for build processes in front-end development."
            />
            <IconCard
              imgPath="/resources/images/flask.png"
              title="Flask"
              text="Key technology for backend services in a blockchain system developed during my co-op at the International CyberCrime Research Centre."
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
              text="Designed and implemented database schemas for a blockchain system. Experience with handling millions of dynamic data inputs."
            />
            <IconCard
              imgPath="/resources/images/postgresql.png"
              title="Postgres"
              text="Familiarity with usage in web applications, although not extensively applied in professional settings."
            />
            <IconCard
              imgPath="/resources/images/sqlite.png"
              title="SQLite"
              text="Used for lighter database needs, particularly in developmental stages of projects."
            />
            <IconCard
              imgPath="/resources/images/Redis.png"
              title="Redis"
              text="Employed as an in-memory data store in a blockchain system, enhancing data retrieval speeds."
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              color="rgba(240, 240, 240, 0.9)"
              paddingLeft="32px"
              paddingTop="32px"
            >
              DevOps
            </Typography>
            <IconCard
              imgPath="/resources/images/docker.png"
              title="Docker"
              text="Docker Description"
            />
            <IconCard
              imgPath="/resources/images/githubwhite.png"
              title="GitHub"
              text="GitHub Description"
            />
            <IconCard
              imgPath="/resources/images/svn.svg"
              title="Subversion"
              text="SVN Description"
            />
          </Box>
        </BorderBox>
      </Box>
    </>
  );
}
