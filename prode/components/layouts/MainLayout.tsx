import { FC, useState, useEffect } from "react"
import { 
  Box,
  Stack, 
  Button,
  Modal
} from "@mui/material"
import Image from "next/image"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

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




  return (
    <>
        
      <Box component="main">
          
        <div className="img_central">
          <div className="circle-colors">
            <img src="/img/CoverSinBullets.png" alt="cover" />
            <DrawerComponen {...imagesrose}></DrawerComponen>
            <DrawerComponen {...imagesblue}></DrawerComponen>
            <DrawerComponen {...imagesyellow}></DrawerComponen>
            <DrawerComponen {...imagesgreen}></DrawerComponen>
            <DrawerComponen {...imagesorange}></DrawerComponen>
            <DrawerComponen {...imagesred}></DrawerComponen>
            <DrawerComponen {...imageslightgreen}></DrawerComponen>
            <DrawerComponen {...imagesturquoise}></DrawerComponen>
            <DrawerComponen {...imagesviolet}></DrawerComponen>
            <DrawerComponen {...imagesbrown}></DrawerComponen>
            <DrawerComponen {...imagesredwine}></DrawerComponen>
          </div>
          {/* <div className="line"></div> */}
        </div>
        
      </Box>

      <Box>
        {/* <img
          src="/img/Logos/Logo-Ingram-Solutions.png"
          alt="ingram solutions"
          className="logo-ingram-bullets"
        /> */}
        <h1 className="title-edu-bullets">
          UN CENTRO <br /> EDUCATIVO <br /> <span>CONECTADO</span>
        </h1>
      </Box>
    </>
  )
}
