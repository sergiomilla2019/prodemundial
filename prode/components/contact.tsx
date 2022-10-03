import { FC, useState, ChangeEvent } from 'react';

import {
  Grid,
  Container,
  Card,
  Box,
  Typography,
  Stack,
  Button,
  Select,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SelectChangeEvent,
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import axios from 'axios';

type FormProps = {
  firstName?: string,
  lastName?: string,
  country?: string,
  company?: string,
  emailAddress?: string,
};

const Contact: FC = () => {
    const [cartVisible, cartVisibleState ] = useState(false);
    const [value, setValue] = useState(null);
    const [time, setTime] = useState(null);


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const smBP = useMediaQuery(theme.breakpoints.up('sm'));

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      borderRadius: "12px",
      padding: "12px 20px",
    };

    const [values, setValues] = useState<FormProps>()
    const [country, setCountry] = useState('')

    const onSubmit = (data: FormProps) => {
        setValues(data)
        //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        let url = `https://s1099016198.t.eloqua.com/e/f2.aspx?elqFormName=copyUntitledForm-1589402808409-637973625258506910&elqSiteID=1099016198&firstName=${ data.firstName }&lastName=${ data.lastName }&emailAddress=${ data.emailAddress }&company=${ data.company }&country=Arg`
        //console.log(url, "<--url---")
        let config = {
            method: 'post',
            url,
            headers: { 
              'Cookie': 'ELOQUA=GUID=19136C74D4B84315BEA3F38F0362C67E; ELQCOUNTRY=AR; ELQSTATUS=OK'
            }
          };
          
        axios(config)
        .then(function (response) {
            if(response.status === 200){
              console.log("Registro del formulario exitoso!");  
              setOpen(true);
            }

        })
        .catch(function (error) {
            console.log(error);
        });
    }
    const defaultValues: FormProps = { 
        firstName: '',
        lastName: '',
        country: '',
        company: '',
        emailAddress: '',
    }

    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log({ event })
      //setValue(event.target.value);
    };


    const handleChange22 = (event: ChangeEvent<HTMLInputElement>) => {
      console.log({
        country: event.target.value,
        ...values
      })
      
    }
    const handleChange2 = (event: SelectChangeEvent) => {
      setCountry(event.target.value as string);
    };
    
    const params = {
      
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    


  return (
    <>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
              Formulario de contacto
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"
            >
            <Typography variant='h4'>
              Registro del formulario exitoso
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>

        <Box component="footer" >
          <Container >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1 }}
              
            >
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  
                  <Card sx={{
                        marginTop: "1rem",
                        width: "100%"
                      }}>
                    <Typography variant="h4" sx={{
                        marginLeft: "2rem",
                        marginTop: "1rem"
                      }}>Contacto</Typography>
                      <Typography variant="h4" sx={{
                        marginLeft: "2rem",
                        marginTop: "1rem"
                      }}>Completá los datos</Typography>
                      
                      <Typography variant="h6" sx={{
                        marginLeft: "2rem",
                        marginTop: "1rem"
                      }}>Datos personales</Typography>
                      <FormContainer 
                        defaultValues={defaultValues} onSuccess={onSubmit}
                        >
                      
                        <Stack direction="row" sx={{ 
                                display: "flex", 
                                margin: "1rem", 
                                justifyContent: "space-between" }}>
                            <TextFieldElement  
                                        name={'firstName'} 
                                        label={'First Name / Nombre'}
                                        size='small' 
                                        id={'firstName'}  
                                        defaultValue="" 
                                        variant="outlined" 
                                        sx={{ 
                                            m: 1,
                                            width: "40rem" }} 
                                        required/>
                            <TextFieldElement  
                                        name='lastName'
                                        size='small' 
                                        id="lastName" 
                                        label="Last Name / Apellido" 
                                        defaultValue="" 
                                        variant="outlined" 
                                        sx={{ 
                                            m: 1,
                                            width: "40rem" }} />
        
                        </Stack>

                        <Stack direction="row" sx={{ 
                                display: "flex", 
                                margin: "1rem", 
                                justifyContent: "space-between" }}>
                                  <TextFieldElement  
                                        name='company'
                                        size='small' 
                                        id="company" 
                                        label="Company / Empresa" 
                                        defaultValue="" 
                                        variant="outlined" 
                                        sx={{ 
                                            m: 1,
                                            width: "40rem" }} />
                                  

                            <TextFieldElement  
                                        name='emailAddress'
                                        size='small' 
                                        id="emailAddress" 
                                        label="Email Address / Correo Electrónico" 
                                        defaultValue="" 
                                        variant="outlined" 
                                        sx={{ 
                                            m: 1,
                                            width: "40rem" }} />
                            
                            
        
                        </Stack>
                        <Stack direction="row" sx={{ 
                                display: "flex", 
                                margin: "1rem", 
                                justifyContent: "space-between" }}>
                            <Select
                                labelId="country-label"
                                id="country"
                                value={country}
                                label="Country / Pais"
                                onChange={handleChange2}
                                sx={{ 
                                    m: 1,
                                    width: "90rem",
                                    zIndex: 9999,
                                   }}
                                >
                                <MenuItem value={"Argentina"} >Argentina</MenuItem>
                                <MenuItem value={"Brasil"}>Brasil</MenuItem>
                                <MenuItem value={"EEUU"}>EEUU</MenuItem>
                            </Select>
                            
        
                        </Stack>
                        
                        

                        <Button 
                            variant="contained" 
                            color="success"
                            type={'submit'}
                        sx={{
                            margin: "2rem"
                        }} >Siguiente</Button>
                      </FormContainer>
                  </Card>
                  
                  
                </Grid>
                
                
              </Grid>
            </Grid>
          </Container>
        </Box>
</>
  )
}

export default Contact;