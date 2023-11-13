import React from 'react'

import { ShopLayout } from '@/components/layouts'
import { Divider,Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { CartList } from '@/components/cart';

const CartPage = () => {
  return (
    <ShopLayout title='Carrito - 3' pageDescription='Carrito de compras de la tienda'>
            <Typography variant='h1' component='h1'>
                Carrito de compras
            </Typography>
            
            <Grid container>
                <Grid xs={12} sm={7}>
                    <CartList/>
                </Grid>

                <Grid xs={12} sm={5}>
                    <Card
                        className='summary-card'
                    >
                        <CardContent>
                            <Typography variant='h2' > Orden </Typography>
                            <Divider sx={{my:1}}/>
                            {/* order summary */}

                            <Box sx={{
                                mt:3
                            }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    CheckOut
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
    </ShopLayout>
  )
}

export default CartPage