import { ShopLayout } from '@/components/layouts'
import { ProductSlideshow, SizeSelector } from '@/components/products';
import { ItemCounter } from '@/components/ui';
import { initialData } from '@/database/products'
import {Grid, Box, Typography, Button, Chip} from '@mui/material'
import React from 'react'


const products = initialData.products[0];

const slug = () => {
  return (
    <ShopLayout
      title={products.title}
      pageDescription={products.description}
    >
      <Grid container spacing={3}>
        {/* izquierda */}
        <Grid item xs={12} sm={7}>
          <ProductSlideshow
            images={products.images}
          />
        </Grid>
        {/* derecha */}
        <Grid item xs={12} sm={5}>
          <Box
            display='flex'
            flexDirection='column'
          >
            {/* title */}
            <Typography variant='h1' component='h1'>
              {products.title}
            </Typography>
            {/* price */}
            <Typography variant="subtitle1" component='h2'>
              ${products.price}
            </Typography>
            {/* cantidad */}
            <Box sx={{my:2}}>
              <Typography variant='subtitle2'>
                Cantidad
              </Typography>
              
              <ItemCounter/>
              <SizeSelector
                /* selectedSize={ products.sizes[0] } */
                sizes={products.sizes}
              />

            </Box>

            {/* add cart */}
            <Button
              color='secondary'
              className='circular-btn'
            >
              Agregar al carrito
            </Button>

           {/*  <Chip
              label='No hay disponibles'
              color='error'
              variant='outlined'
            /> */}

            <Box
              sx={{mt:3}}
            >
              <Typography variant='subtitle2'>
                Descripcion
              </Typography>
              <Typography variant='body2'>
                {products.description}
              </Typography>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default slug