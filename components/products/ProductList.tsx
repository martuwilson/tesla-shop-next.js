import React, { FC } from 'react'

import {Grid} from '@mui/material'
import { IProduct } from '@/interfaces'
import { ProductCard } from '.';


interface ProductProps {
    products: IProduct[];
}

export const ProductList:FC<ProductProps> = ({products}) => {



  return (
    <Grid container spacing={4}>
        {
            products.map( product => (
                <ProductCard product={product} key={product.slug}/>
            ))
        }
    </Grid>
  )
}
