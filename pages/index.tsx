import { ShopLayout } from "@/components/layouts";
import { Typography, Grid,CardActionArea , CardMedia } from "@mui/material";

import { initialData } from "@/database/products";


export default function Home() {
  return (
    <ShopLayout title="Teslo Shop || Home" pageDescription="Home page">
      <Typography variant="h1" component='h1'>Tienda</Typography> {/* importante que sea H1 por el SEO */}
      <Typography variant="h2" sx={{mb:1}}>Todos los productos</Typography>



      {/* home temporal */}

      <Grid container spacing={4}>
        {
          initialData.products.map((product) => (
            <Grid item xs={6} sm={4} key={product.slug}>
              <CardActionArea>
                <CardMedia
                component="img"
                image={`products/${product.images[0]}`}
                alt={product.title}
                />
              </CardActionArea>
            </Grid>
          ))
        }
        
      </Grid>

    </ShopLayout>
  )
}
