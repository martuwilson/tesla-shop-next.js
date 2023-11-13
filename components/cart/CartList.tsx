import {FC} from 'react'
import {Typography, Grid, CardActionArea, CardMedia, Box, Button} from '@mui/material'

import { initialData } from "@/database/products"
import Link from 'next/link'
import { ItemCounter } from '../ui'


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

interface CartProps {
    editable?: boolean;
}

export const CartList:FC<CartProps> = ({ editable = false }) => {



  return (
    <>
        {
            productsInCart.map( product => {
                return (
                    <Grid container spacing={2} key={product.slug} sx={{mb:1}}>
                        
                        <Grid item xs={3}>
                            <Link
                                href={`/product/slug`} /* ${product.slug} */
                                passHref
                            >
                                    <CardActionArea>
                                        <CardMedia
                                            image={`products/${product.images[0]}`}
                                            component={'img'}
                                            sx={{borderRadius: '5px'}}
                                        />
                                    </CardActionArea>
                            </Link>
                        </Grid>

                        <Grid item xs={7}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant='body1'>
                                    {product.title}
                                </Typography>
                                <Typography variant='body1'>
                                Talle: <strong>M</strong>
                                </Typography> 
                                {/* condicional */}

                                {
                                    editable ? 
                                    <ItemCounter/> : <Typography variant='h5'>3</Typography>
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                            <Typography variant='subtitle1'>
                                ${product.price}
                            </Typography>
                            {/* editable */}

                            {
                            editable ? 
                                <Button variant='text' color="secondary" >
                                    Eliminar
                                </Button> : null
                            }
                            
                        </Grid>

                    </Grid>
                )
            } )
        }
    </>
  )
}
