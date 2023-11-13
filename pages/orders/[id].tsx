import React from 'react'

import { ShopLayout } from '@/components/layouts'
import { Divider,Typography, Grid, Card, CardContent, Box, Button, Chip } from '@mui/material';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import { CartList, OrderResume } from '@/components/cart';
import Link from 'next/link';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de orden 1234' pageDescription='Resumen de su orden 1234'>
            <Typography variant='h1' component='h1'>
                Orden de compra 1234
            </Typography>

            {/* <Chip
                sx={{
                    my:2
                }}
                label='Pendiente de pago'
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined/>}
            /> */}
            <Chip
                sx={{
                    my:2
                }}
                label='Orden pagada'
                variant='outlined'
                color='success'
                icon={<CreditScoreOutlined/>}
            />

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
                                <h1>
                                    Pagar
                                </h1>
                                <Chip
                                    sx={{
                                        my:2
                                    }}
                                    label='Orden pagada'
                                    variant='outlined'
                                    color='success'
                                    icon={<CreditScoreOutlined/>}
                                />
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
    </ShopLayout>
  )
}

export default OrderPage