import React, { FC } from 'react'
import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import { NextPage } from "next"
import { useRouter } from 'next/router'
import Image from "next/image"
import styles from "./login.module.css"
import { useForm, SubmitHandler } from "react-hook-form"

import NextLink from "next/link"

 

export const isValidEmail = (email: string): boolean => {
    const match = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  
    return !!match
  }
  
  export const isEmail = (email: string): string | undefined => {
    return isValidEmail(email) ? undefined : "Ingresá un email válido"
  }

  interface IFormInputs {
    user: string
    password: string
  }

const LoginProde: FC = () => {

  const router = useRouter()  

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<IFormInputs>()
    
      const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
        localStorage.setItem('login', 'true');
        router.push('fixture')
      }
         


  return (

    <>
    {/* FORMULARIO LoginProde START */}
    <Box
        sx={{ bgcolor: "#ffffff" }}
        className={`${styles.form} ${styles.gridItem}`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className={styles.formContainer}
        >
          <Typography variant="h2">Login</Typography>
          

          <Typography variant="subtitle1" sx={{ mb: 2 }}>Ingresa con tu usuario</Typography>

          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <TextField
              type="email"
              label="Correo"
              {...register("user", {
                required: "Este campo es requerido",
                minLength: { value: 1, message: "Este campo es requerido" },
              })}
              error={!!errors.user}
            />
          </FormControl>
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <TextField
              type="password"
              label="Contraseña"
              required
              {...register("password", {
                required: "Este campo es requerido",
                minLength: { value: 6, message: "Mínimo 6 caracteres" },
              })}
              error={!!errors.password}
              
            />
          </FormControl>

          {/**<NextLink href={"/recuperar"} passHref>
            <Button sx={{ color: "#008085", my: 1 }} fullWidth>
              Olvidé mi contraseña
            </Button>
          </NextLink> */}

          <Button variant="contained" sx={{ width: "100%" }} type="submit">
            Ingresar
          </Button>
          
        </form>
      </Box>
      {/* FORMULARIO LoginProde END */}
    </>
  )
}

export default LoginProde