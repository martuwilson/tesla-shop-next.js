import React from 'react'
import Link from 'next/link';

import { Box,Typography } from '@mui/material';
import { ShopLayout } from '@/components/layouts'
import {RemoveShoppingCartOutlined} from '@mui/icons-material'

const empty = () => {
  return (
    <ShopLayout
        title="Carrito de compras vacio"
        pageDescription="No hay articulos en el carrito"
    >
        <Box display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{
            flexDirection: {
                xs: 'column',
                sm: 'column',
            },
            }
        }
        >   
            <RemoveShoppingCartOutlined
                sx={{fontSize: 100}}
            />
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <Typography variant='h1' component="h1" fontSize={100} fontWeight={200}>
                    Error |
                </Typography>
                <Typography marginLeft={2} fontSize={50}>
                    Su carrito esta vacio
                </Typography>

                
            </Box>

            <Link href='/' style={
                {
                    textDecoration: 'none',
                }
            
            }>
                    <Box>
                        <Typography variant='h2' color='secondary' sx={{
                            cursor: 'pointer',
                            color: 'black !important',
                            ':hover': {
                                color: 'blue !important',
                                textDecoration: 'underline'
                            }
                        }}>
                            Volver a la tienda
                        </Typography>
                    </Box>
                </Link>
            
        </Box>
    </ShopLayout>
  )
}

export default empty