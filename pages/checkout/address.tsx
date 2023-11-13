import React from 'react'

import { Divider,Typography, Grid, Card, CardContent, Box, Button, TextField, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

import { ShopLayout } from '@/components/layouts'

const AddressPage = () => {
  return (
    <ShopLayout
        title="Dirección"
        pageDescription="Dirección de envío"
    >
        <Typography variant='h1' component={'h1'} >Dirección</Typography>
        <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
                <TextField
                    label='Nombre'
                    variant='filled'
                    fullWidth
                    sx={{mt:2}}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label='Apellido'
                    variant='filled'
                    fullWidth
                    sx={{mt:2}}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label='Dirección'
                    variant='filled'
                    fullWidth
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label='Dirección 2 (opcional)'
                    variant='filled'
                    fullWidth
                />
            </Grid>


            <Grid item xs={12} sm={6}>
                <TextField
                    label='Ciudad'
                    variant='filled'
                    fullWidth
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label='Código Postal'
                    variant='filled'
                    fullWidth
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>País</InputLabel>
                    <Select
                        variant='filled'
                        label='País'
                        value={1}
                    >
                        <MenuItem value={1}>Argentina</MenuItem>
                        <MenuItem value={2}>Brasil</MenuItem>
                        <MenuItem value={3}>Chile</MenuItem>
                        <MenuItem value={4}>Uruguay</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label='Teléfono'
                    variant='filled'
                    fullWidth
                />
            </Grid>

        </Grid>

        <Box>
            <Button
                variant='contained'
                color='secondary'
                fullWidth
                className='circular-btn'
                sx={{
                    mt:2
                }}
            >
                Realizar pedido
            </Button>  
        </Box>

    </ShopLayout>
  )
}

export default AddressPage