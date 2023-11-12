// pages/404.js o pages/404.jsx
import React from 'react';
import { ShopLayout } from '@/components/layouts';
import { Box,Typography } from '@mui/material';


const NotFoundPage = () => {
  return (
    <ShopLayout title='Page Not Found' pageDescription='No se encuentra la página deseada'>
        <Box display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{
            flexDirection: {
                xs: 'column',
                sm: 'row',
            },
            }
        }
        >
            <Typography variant='h1' component="h1" fontSize={100} fontWeight={200}>
                404 |
            </Typography>
            <Typography marginLeft={2}>
                No se encontró la página deseada
            </Typography>
        </Box>
    </ShopLayout>
  );
};

export default NotFoundPage;
