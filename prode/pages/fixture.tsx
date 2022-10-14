import React, { useState, useEffect, ChangeEvent } from 'react';
import { 
    Grid, 
    Typography, 
    Button,
    Divider,
    Box,
    Link,
    Card,
    CardContent,
    CardMedia,
    TextField,
    MenuItem,
  } from '@mui/material';

  import { useForm, SubmitHandler } from "react-hook-form"
import { FC } from 'react';


  interface IFormInputs {
    user: string
    password: string
  }

  const partidos = [
    {
        id: '1',
        equipo1: {
            nombre: 'Qatar',
            imagen: './img/qatar.png',
        },
        equipo2: {
            nombre: 'Ecuador',
            imagen: './img/ecuador.png',
        },
        grupo: 'A',
        fecha: '1',
        diayhora: '20/11 - 13:00'
    },
    {
        id: '2',
        equipo1: {
            nombre: 'Inglaterra',
            imagen: './img/inglaterra.png',
        },
        equipo2: {
            nombre: 'Iran',
            imagen: './img/iran.png',
        },
        grupo: 'B',
        fecha: '1',
        dia: '21/11 - 10:00'
    },
    {
        id: '3',
        equipo1: {
            nombre: 'Senegal',
            imagen: './img/senegal.png',
        },
        equipo2: {
            nombre: 'Paises bajos',
            imagen: './img/paisesbajos.png',
        },
        grupo: 'A',
        fecha: '1',
        dia: '21/11 - 13:00'
    },
    {
        id: '4',
        equipo1: {
            nombre: 'EEUU',
            imagen: './img/eeuu.png',
        },
        equipo2: {
            nombre: 'Gales',
            imagen: './img/gales.png',
        },
        grupo: 'B',
        fecha: '1',
        dia: '21/11 - 16:00'
    },
    {
        id: '5',
        equipo1: {
            nombre: 'Argentina',
            imagen: './img/argentina.png',
        },
        equipo2: {
            nombre: 'Arabia saudita',
            imagen: './img/arabia.png',
        },
        grupo: 'C',
        fecha: '1',
        dia: '22/11 - 07:00'
    },
    {
        id: '6',
        equipo1: {
            nombre: 'Dinamarca',
            imagen: './img/dinamarca.png',
        },
        equipo2: {
            nombre: 'Tunez',
            imagen: './img/tunez.png',
        },
        grupo: 'D',
        fecha: '1',
        dia: '22/11 - 10:00'
    },
    {
        id: '7',
        equipo1: {
            nombre: 'Mexico',
            imagen: './img/mexico.png',
        },
        equipo2: {
            nombre: 'Polonia',
            imagen: './img/polonia.png',
        },
        grupo: 'C',
        fecha: '1',
        dia: '22/11 - 13:00'
    },
    {
        id: '8',
        equipo1: {
            nombre: 'Francia',
            imagen: './img/francia.png',
        },
        equipo2: {
            nombre: 'Australia',
            imagen: './img/australia.png',
        },
        grupo: 'D',
        fecha: '1',
        dia: '22/11 - 16:00'
    },
    {
        id: '9',
        equipo1: {
            nombre: 'Marruecos',
            imagen: './img/marruecos.png',
        },
        equipo2: {
            nombre: 'Croacia',
            imagen: './img/croacia.png',
        },
        grupo: 'F',
        fecha: '1',
        dia: '23/11 - 07:00'
    },
    {
        id: '15',
        equipo1: {
            nombre: 'Alemania',
            imagen: './img/alemania.png',
        },
        equipo2: {
            nombre: 'Japon',
            imagen: './img/japon.png',
        },
        grupo: 'E',
        fecha: '1',
        dia: '23/11 - 10:00'
    },
    {
        id: '10',
        equipo1: {
            nombre: 'España',
            imagen: './img/espana.png',
        },
        equipo2: {
            nombre: 'Costa Rica',
            imagen: './img/costarica.png',
        },
        grupo: 'E',
        fecha: '1',
        dia: '23/11 - 13:00'
    },
    {
        id: '11',
        equipo1: {
            nombre: 'Belgica',
            imagen: './img/belgica.png',
        },
        equipo2: {
            nombre: 'Canada',
            imagen: './img/canada.png',
        },
        grupo: 'F',
        fecha: '1',
        dia: '23/11 - 16:00'
    },
    {
        id: '12',
        equipo1: {
            nombre: 'Suiza',
            imagen: './img/suiza.png',
        },
        equipo2: {
            nombre: 'Camerun',
            imagen: './img/camerun.png',
        },
        grupo: 'G',
        fecha: '1',
        dia: '24/11 - 07:00'
    },
    {
        id: '13',
        equipo1: {
            nombre: 'Uruguay',
            imagen: './img/uruguay.png',
        },
        equipo2: {
            nombre: 'Corea del sur',
            imagen: './img/corea.png',
        },
        grupo: 'H',
        fecha: '1',
        dia: '24/11 - 10:00'
    },
    {
        id: '14',
        equipo1: {
            nombre: 'Portugal',
            imagen: './img/portugal.png',
        },
        equipo2: {
            nombre: 'Ghana',
            imagen: './img/ghana.png',
        },
        grupo: 'H',
        fecha: '1',
        dia: '24/11 - 13:00'
    },
    {
        id: '16',
        equipo1: {
            nombre: 'Brasil',
            imagen: './img/brasil.png',
        },
        equipo2: {
            nombre: 'Serbia',
            imagen: './img/serbia.png',
        },
        grupo: 'G',
        fecha: '1',
        dia: '24/11 - 16:00'
    },
    {
        id: '17',
        equipo1: {
            nombre: 'Gales',
            imagen: './img/gales.png',
        },
        equipo2: {
            nombre: 'Iran',
            imagen: './img/iran.png',
        },
        grupo: 'B',
        fecha: '2',
        dia: '25/11 - 07:00'
    },
    {
        id: '18',
        equipo1: {
            nombre: 'Qatar',
            imagen: './img/qatar.png',
        },
        equipo2: {
            nombre: 'Senegal',
            imagen: './img/senegal.png',
        },
        grupo: 'A',
        fecha: '2',
        dia: '25/11 - 10:00'
    },
    {
        id: '19',
        equipo1: {
            nombre: 'Paises bajos',
            imagen: './img/paisesbajos.png',
        },
        equipo2: {
            nombre: 'Ecuador',
            imagen: './img/ecuador.png',
        },
        grupo: 'A',
        fecha: '2',
        dia: '25/11 - 13:00'
    },
    {
        id: '20',
        equipo1: {
            nombre: 'Inglaterra',
            imagen: './img/inglaterra.png',
        },
        equipo2: {
            nombre: 'EEUU',
            imagen: './img/eeuu.png',
        },
        grupo: 'B',
        fecha: '2',
        dia: '25/11 - 16:00'
    },
    {
        id: '21',
        equipo1: {
            nombre: 'Tunez',
            imagen: './img/tunez.png',
        },
        equipo2: {
            nombre: 'Australia',
            imagen: './img/australia.png',
        },
        grupo: 'D',
        fecha: '2',
        dia: '26/11 - 07:00'
    },
    {
        id: '22',
        equipo1: {
            nombre: 'Polonia',
            imagen: './img/polonia.png',
        },
        equipo2: {
            nombre: 'Arabia Saudita',
            imagen: './img/arabia.png',
        },
        grupo: 'C',
        fecha: '2',
        dia: '26/11 - 10:00'
    },
    {
        id: '23',
        equipo1: {
            nombre: 'Francia',
            imagen: './img/francia.png',
        },
        equipo2: {
            nombre: 'Dinamarca',
            imagen: './img/dinamarca.png',
        },
        grupo: 'D',
        fecha: '2',
        dia: '26/11 - 13:00'
    },
    {
        id: '24',
        equipo1: {
            nombre: 'Argentina',
            imagen: './img/argentina.png',
        },
        equipo2: {
            nombre: 'Mexico',
            imagen: './img/mexico.png',
        },
        grupo: 'C',
        fecha: '2',
        dia: '26/11 - 16:00'
    },
    {
        id: '25',
        equipo1: {
            nombre: 'Japon',
            imagen: './img/japon.png',
        },
        equipo2: {
            nombre: 'Costa Rica',
            imagen: './img/costarica.png',
        },
        grupo: 'E',
        fecha: '2',
        dia: '27/11 - 07:00'
    },
    {
        id: '26',
        equipo1: {
            nombre: 'Belgica',
            imagen: './img/belgica.png',
        },
        equipo2: {
            nombre: 'Marruecos',
            imagen: './img/marruecos.png',
        },
        grupo: 'F',
        fecha: '2',
        dia: '27/11 - 10:00'
    },
    {
        id: '27',
        equipo1: {
            nombre: 'Croacia',
            imagen: './img/croacia.png',
        },
        equipo2: {
            nombre: 'Canada',
            imagen: './img/canada.png',
        },
        grupo: 'F',
        fecha: '2',
        dia: '27/11 - 13:00'
    },
    {
        id: '28',
        equipo1: {
            nombre: 'España',
            imagen: './img/espana.png',
        },
        equipo2: {
            nombre: 'Alemania',
            imagen: './img/alemania.png',
        },
        grupo: 'E',
        fecha: '2',
        dia: '27/11 - 16:00'
    },
    {
        id: '29',
        equipo1: {
            nombre: 'Camerun',
            imagen: './img/camerun.png',
        },
        equipo2: {
            nombre: 'Serbia',
            imagen: './img/serbia.png',
        },
        grupo: 'G',
        fecha: '2',
        dia: '28/11 - 07:00'
    },
    {
        id: '30',
        equipo1: {
            nombre: 'Corea del sur',
            imagen: './img/corea.png',
        },
        equipo2: {
            nombre: 'Ghana',
            imagen: './img/serbia.png',
        },
        grupo: 'H',
        fecha: '2',
        dia: '28/11 - 10:00'
    },
    {
        id: '31',
        equipo1: {
            nombre: 'Brasil',
            imagen: './img/brasil.png',
        },
        equipo2: {
            nombre: 'Suiza',
            imagen: './img/suiza.png',
        },
        grupo: 'G',
        fecha: '2',
        dia: '28/11 - 13:00'
    },
    {
        id: '32',
        equipo1: {
            nombre: 'Portugal',
            imagen: './img/portugal.png',
        },
        equipo2: {
            nombre: 'Uruguay',
            imagen: './img/uruguay.png',
        },
        grupo: 'G',
        fecha: '2',
        dia: '28/11 - 16:00'
    },
    {
        id: '33',
        equipo1: {
            nombre: 'Ecuador',
            imagen: './img/ecuador.png',
        },
        equipo2: {
            nombre: 'Senegal',
            imagen: './img/senegal.png',
        },
        grupo: 'A',
        fecha: '3',
        dia: '29/11 - 12:00'
    },
    {
        id: '34',
        equipo1: {
            nombre: 'Paises bajos',
            imagen: './img/paisesbajos.png',
        },
        equipo2: {
            nombre: 'Qatar',
            imagen: './img/qatar.png',
        },
        grupo: 'A',
        fecha: '3',
        dia: '29/11 - 12:00'
    },
    {
        id: '35',
        equipo1: {
            nombre: 'Iran',
            imagen: './img/iran.png',
        },
        equipo2: {
            nombre: 'EEUU',
            imagen: './img/eeuu.png',
        },
        grupo: 'B',
        fecha: '3',
        dia: '29/11 - 16:00'
    },
    {
        id: '36',
        equipo1: {
            nombre: 'Gales',
            imagen: './img/gales.png',
        },
        equipo2: {
            nombre: 'Inglaterra',
            imagen: './img/inglaterra.png',
        },
        grupo: 'B',
        fecha: '3',
        dia: '29/11 - 16:00'
    },
    {
        id: '37',
        equipo1: {
            nombre: 'Tunez',
            imagen: './img/tunez.png',
        },
        equipo2: {
            nombre: 'Francia',
            imagen: './img/francia.png',
        },
        grupo: 'D',
        fecha: '3',
        dia: '30/11 - 12:00'
    },
    {
        id: '38',
        equipo1: {
            nombre: 'Australia',
            imagen: './img/australia.png',
        },
        equipo2: {
            nombre: 'Dinamarca',
            imagen: './img/dinamarca.png',
        },
        grupo: 'D',
        fecha: '3',
        dia: '30/11 - 12:00'
    },
    {
        id: '39',
        equipo1: {
            nombre: 'Polonia',
            imagen: './img/polonia.png',
        },
        equipo2: {
            nombre: 'Argentina',
            imagen: './img/argentina.png',
        },
        grupo: 'C',
        fecha: '3',
        dia: '30/11 - 16:00'
    },
    {
        id: '40',
        equipo1: {
            nombre: 'Arabia Saudita',
            imagen: './img/arabia.png',
        },
        equipo2: {
            nombre: 'Mexico',
            imagen: './img/mexico.png',
        },
        grupo: 'C',
        fecha: '3',
        dia: '30/11 - 16:00'
    },
    {
        id: '41',
        equipo1: {
            nombre: 'Croacia',
            imagen: './img/croacia.png',
        },
        equipo2: {
            nombre: 'Belgica',
            imagen: './img/belgica.png',
        },
        grupo: 'F',
        fecha: '3',
        dia: '1/12 - 12:00'
    },
    {
        id: '42',
        equipo1: {
            nombre: 'Canada',
            imagen: './img/canada.png',
        },
        equipo2: {
            nombre: 'Marruecos',
            imagen: './img/marruecos.png',
        },
        grupo: 'F',
        fecha: '3',
        dia: '1/12 - 12:00'
    },
    {
        id: '43',
        equipo1: {
            nombre: 'Japon',
            imagen: './img/japon.png',
        },
        equipo2: {
            nombre: 'España',
            imagen: './img/espana.png',
        },
        grupo: 'E',
        fecha: '3',
        dia: '1/12 - 16:00'
    },
    {
        id: '44',
        equipo1: {
            nombre: 'Costa rica',
            imagen: './img/costarica.png',
        },
        equipo2: {
            nombre: 'Alemania',
            imagen: './img/alemania.png',
        },
        grupo: 'E',
        fecha: '3',
        dia: '1/12 - 16:00'
    },
    {
        id: '45',
        equipo1: {
            nombre: 'Corea del sur',
            imagen: './img/corea.png',
        },
        equipo2: {
            nombre: 'Portugal',
            imagen: './img/portugal.png',
        },
        grupo: 'H',
        fecha: '3',
        dia: '2/12 - 12:00'
    },
    {
        id: '46',
        equipo1: {
            nombre: 'Ghana',
            imagen: './img/ghana.png',
        },
        equipo2: {
            nombre: 'Uruguay',
            imagen: './img/uruguay.png',
        },
        grupo: 'H',
        fecha: '3',
        dia: '2/12 - 12:00'
    },
    {
        id: '47',
        equipo1: {
            nombre: 'Serbia',
            imagen: './img/serbia.png',
        },
        equipo2: {
            nombre: 'Suiza',
            imagen: './img/suiza.png',
        },
        grupo: 'G',
        fecha: '3',
        dia: '2/12 - 16:00'
    },
    {
        id: '48',
        equipo1: {
            nombre: 'Camerun',
            imagen: './img/camerun.png',
        },
        equipo2: {
            nombre: 'Brasil',
            imagen: './img/brasil.png',
        },
        grupo: 'G',
        fecha: '3',
        dia: '2/12 - 16:00'
    },
    
]

const Fixture:FC = () => {

    const [fecha, setFecha] = useState('1');
    const [partidosFecha, setPartidosFecha] = useState(partidos);

    useEffect(() => {
      setPartidosFecha(partidos)
    }, [])
    


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<IFormInputs>()

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
        //localStorage.setItem('login', 'true');
        //router.push('fixture')
      }

    //const [equipo, setEquipo] = useState({});

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        //setCurrency(event.target.value);
      }; 

      const handleChangeFecha = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setFecha(event.target.value)
        //setPartidosFecha(partidos.filter(partido => partido.fecha === fecha))
        let partidosList = partidos.filter(partido => partido.fecha === event.target.value)
        console.log(fecha, "<--fecha--")

        console.log(partidosList)
        setPartidosFecha(partidosList)
      }
      


const goles = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '10',
    label: '10',
  },
];


  return (
    <>
        <Grid container>
            <Grid item xs={12} paddingTop="0.5em " >
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                
                >
                <Typography variant='h2' sx={{ p:2, display: 'flex', justifyContent: "center" }} >Fixture</Typography>
                <TextField
                    id='fecha'
                    select
                    label="Fechas"
                    value={fecha}
                    sx={{ p: 1, width: '10rem' }}
                    onChange={handleChangeFecha}>
                        <MenuItem key='1' value='1'>
                        Fecha 1
                        </MenuItem>
                        <MenuItem key='2' value='2'>
                        Fecha 2
                        </MenuItem>
                        <MenuItem key='3' value='3'>
                        Fecha 3
                        </MenuItem>
                    </TextField>
                {
                     partidosFecha?.map((partido) => (
                            <Card key={partido.id} sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            { partido?.equipo1?.nombre }
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        image={ partido?.equipo1?.imagen }
                                        alt={ partido?.equipo1?.nombre }
                                    />

                                    <TextField
                                        id={ partido?.equipo1?.nombre }
                                        select
                                        label="-"
                                        sx={{ p: 1 }}
                                        onChange={handleChange}>
                                            {goles.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                            

                                        </TextField>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography component="div" variant="h3" >
                                        VS
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                        { partido?.equipo2?.nombre }
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        image={ partido?.equipo2?.imagen }
                                        alt={ partido?.equipo2?.nombre }
                                    />

                                    <TextField
                                        id={ partido?.equipo2?.nombre }
                                        select
                                        label="-"
                                        sx={{ p: 1 }}
                                        onChange={handleChange}>
                                            {goles.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                            
                                        </TextField>
                                    
                                </Box>
                                
                            </Card>
                     ))
                }
                {/** inicio partido */}
                
                {/** fin partido */}    
                  
                
                </form>
            </Grid>
        </Grid>    
    </>
  )
}

export default Fixture