import { FC, useState, useEffect } from "react"
import { 
  Box,
  Stack, 
  Button,
  Modal,
  Typography
} from "@mui/material"
import Image from "next/image"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import LoginProde from "../LoginProde"
import { DrawerComponen } from "../drawer/DrawerComponen"
import Contact from "../contact"
import {
  imagesorange,
  imagesgreen,
  imagesyellow,
  imagesrose,
  imagesblue,
  imagesred,
  imageslightgreen,
  imagesturquoise,
  imagesviolet,
  imagesbrown,
  imagesredwine,
} from "./drawerDates"

interface ButtonProps {
  isCartVisible: boolean
  handleOpen: any
}

const ButtonCart: FC<ButtonProps> = ({ isCartVisible, handleOpen }) => {
  return (
    <>
      {!isCartVisible && (
        <Button
          color="secondary"
          onClick={() => handleOpen(true)}
          sx={{
            p: 2,
            position: "fixed",
            right: "20px",
            botton: "0px",
            zIndex: 10,
          }}
        >
          <Image src="/img/contact_icon.png" alt="asd" width={50} height={50} />
        </Button>
      )}
    </>
  )
}

interface Props {
  setcoverState: any
}

export const MainLayout: FC<Props> = ({ setcoverState }) => {
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    function idleUser() {
      let t: any
      window.onload = resetTimer
      window.onmousemove = resetTimer
      window.onmousedown = resetTimer
      window.ontouchstart = resetTimer
      window.ontouchmove = resetTimer
      window.onclick = resetTimer
      window.onkeydown = resetTimer
      window.addEventListener("scroll", resetTimer, true)

      function setCoverFalse() {
        setcoverState(false)
      }

      function resetTimer() {
        clearTimeout(t)
        t = setTimeout(setCoverFalse, 120000)
        // 3000
      }
    }
    idleUser()
  }, [])

  const login = localStorage.getItem('login');


  return (
    <>

      { 
        ( login !== 'true' ) ? 
        <LoginProde />
        :
        <Box component="main" sx={{ bgcolor: "#ffffff" }}>
          
        <div className="img_central">
          <div className="circle-colors">
             <Typography>Fixture</Typography>
          </div>
        </div>
        
      </Box>
      }
      

      

      
    </>
  )
}
