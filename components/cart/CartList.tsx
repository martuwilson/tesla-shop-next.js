
import {Typography, Grid, CardActionArea, CardMedia, Box, Button} from '@mui/material'

import { initialData } from "@/database/products"
import Link from 'next/link'
import { ItemCounter } from '../ui'


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]


export const CartList = () => {
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
                                <ItemCounter/>
                            </Box>
                        </Grid>

                        <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                            <Typography variant='subtitle1'>
                                ${product.price}
                            </Typography>
                            {/* editable */}
                            <Button variant='text' color="secondary" >
                                Eliminar
                            </Button>
                        </Grid>

                    </Grid>
                )
            } )
        }
    </>
  )
}
