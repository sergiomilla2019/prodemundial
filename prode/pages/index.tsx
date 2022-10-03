import { Box, Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { MainLayout } from "../components"

const Home: NextPage = () => {
  const [coverState, setcoverState] = useState(false)

  useEffect(() => {
    if(coverState){
      document.body.style.overflow = "initial"
      window.scrollTo(0, 0)
    }
    else{
      document.body.style.overflow = "hidden"
      window.scrollTo(0, 0)
    }
  }, [coverState]);

  const coverClick = () => {
    setcoverState(true)
  }  

  return (
    <>
      <Box
        id="cover_image"
        className={`cover_image ${coverState && "out" }`}
        onClick={coverClick}
      >
        <Stack
          className="cover-container"
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography
            className="cover-tittle"
            sx={{ color: "#fff !important" }}
            variant="h1"
            gutterBottom
          >
            Education
          </Typography>

          <img src={"/img/Logos/Logo-Ingram-Solutions.png"} alt="logo ingram" />
        </Stack>
      </Box>
      {
        coverState && <MainLayout setcoverState={setcoverState} />
      }
    </>
  )
}

export default Home
