import {FC, useState, useMemo} from 'react'
import { Typography, Grid,CardActionArea , CardMedia, Card, Box } from "@mui/material";
import { IProduct } from '@/interfaces';


interface Props{
    product: IProduct
}

export const ProductCard:FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => {
        if(isHovered){
            return `products/${product.images[1]}`
        }else{
            return `products/${product.images[0]}`
        }
    }, [isHovered, product.images])

  return (
    <Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                className='fadeIn'
                image={productImage}
                alt={product.title}
                />
            </CardActionArea>
        </Card>

        <Box sx={{
            mt:1
        }}
        className='fadeIn'
        >
            <Typography
                fontWeight={700}
            >
                {product.title}
            </Typography>
            <Typography
                fontWeight={500}
            >
                ${product.price}
            </Typography>
        </Box>
    </Grid>
  )
}
