import { AuthLayout } from '@/components/layouts/AuthLayout'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <AuthLayout
        title='Ingresar'
    >
        <Box
            sx={{
                width: 350,
                padding: '10px 20px'
            }}
        >
            <Grid container spacing={2}>

                <Grid item xs={12} sx={{
                    mb:2
                }}>
                    <Typography variant='h1' component={'h1'}>Iniciar Sesión</Typography>
                </Grid>

                <Grid item xs={12}>
                   <TextField label="Correo" variant="filled" fullWidth/>
                </Grid>

                <Grid item xs={12}>
                   <TextField label="Contraseña" type='password' variant="filled" fullWidth/>
                </Grid>

                <Grid item xs={12}>
                   <Button
                    color="secondary"
                    className='circular-btn'
                    size='large'
                    fullWidth
                   >
                    Ingresar
                    </Button>
                   
                </Grid>

                <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                   <Link
                    href='/auth/register'
                    passHref
                   >
                    <Typography
                        variant="caption"
                    >
                        No tenes una cuenta? Regístrate
                    </Typography>
                   </Link>
                   
                </Grid>
            </Grid>
        </Box>
        

    </AuthLayout>

  )
}

export default LoginPage