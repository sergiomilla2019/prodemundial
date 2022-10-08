import { useState, useEffect, ChangeEvent } from 'react';
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
    
]

const fixture = () => {

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
        //console.log(fecha, "<--fecha--")

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
                            <Card sx={{ display: 'flex', justifyContent: "space-between" }}>
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

export default fixture