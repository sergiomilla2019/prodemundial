import React from 'react'

const partido = () => {
  return (
    <>
    <Card sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Equipo 1
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            image="./img/qatar.png"
                            alt="Equipo 1"
                        />

                        <TextField
                            id="equipo1"
                            select
                            label="Equipo 1"
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
                                Equipo 2
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            image="./img/ecuador.png"
                            alt="Equipo 2"
                        />

                        <TextField
                            id="equipo2"
                            select
                            label="Equipo 2"
                            onChange={handleChange}>
                                {goles.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                
                            </TextField>
                        
                    </Box>
                    
                    </Card>
    </>
  )
}

export default partido