import React from 'react'

import { ShopLayout } from '@/components/layouts'
import { Divider,Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { CartList, OrderResume } from '@/components/cart';
import Link from 'next/link';

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de compra' pageDescription='Resumen de compras de la tienda'>
            <Typography variant='h1' component='h1'>
                Resumen de compra
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
                            <Typography variant='h2' > Resumen (3 productos) </Typography>
                            <Divider sx={{my:1}}/>

                            <Box display={'flex'} justifyContent={'end'}>
                                <Link
                                    href={`/checkout/address`} /* ${product.slug} */
                                    passHref
                                >
                                    Editar
                                </Link>
                            </Box>
                            <Typography variant='subtitle1' sx={{mb:1}}>Dirección de entrega</Typography>
                            <Typography>Martin Martin</Typography>
                            <Typography>Calle false 123</Typography>
                            <Typography>Antelope, SAC 235</Typography>
                            <Typography>Polonia</Typography>
                            <Typography>+085 1234</Typography>

                            <Divider sx={{my:1}}/>
                            <Box display={'flex'} justifyContent={'end'}>
                                <Link
                                    href={`/cart`} /* ${product.slug} */
                                    passHref
                                >
                                    Editar
                                </Link>
                            </Box>
                            <OrderResume/>
                            <Box sx={{
                                mt:3
                            }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Confirmar Orden
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
    </ShopLayout>
  )
}

export default SummaryPage