import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import { SearchOutlined,ShoppingCartOutlined } from '@mui/icons-material';


export const Navbar = () => {
  return (
            <AppBar>
                <Toolbar>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                            <Typography variant='h6'>Teslo | </Typography>
                            <Typography sx={{ml:0.5}}>Shop</Typography>
                        </Link>


                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                            }
                        }}>
                            <Link href="/category/men">
                                <Button>Hombres</Button>
                            </Link>
                            <Link href="/category/woman">
                                <Button>Mujeres</Button>
                            </Link>
                            <Link href="/category/kids">
                                <Button>Niños</Button>
                            </Link>
                        </Box>


                        <Box flex={1} />

                        <IconButton>
                            <SearchOutlined />
                        </IconButton>

                        <Link href="/cart">
                            <IconButton>
                                <Badge badgeContent={2} color='secondary'>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </IconButton>
                        </Link>

                        <Button>
                            Menu
                        </Button>
                </Toolbar>
            </AppBar>
  )
}
