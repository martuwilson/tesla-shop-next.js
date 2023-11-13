

import {Typography, Grid, CardActionArea, CardMedia, Box, Button} from '@mui/material'

export const OrderResume = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>

        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>3 items</Typography>
        </Grid>


        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>

        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>
                $ 1000
            </Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Impuestos (21%)</Typography>
        </Grid>

        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>
                $ 210
            </Typography>
        </Grid>

        <Grid item xs={6} sx={{mt:2}}>
            <Typography variant='subtitle1'>Total</Typography>
        </Grid>

        <Grid item xs={6} display={'flex'} justifyContent={'end'} sx={{mt:2}}>
            <Typography variant='subtitle1'>
                $ 1210
            </Typography>
        </Grid>
    </Grid>
  )
}
