import React from 'react'

import { ShopLayout } from '@/components/layouts'
import { Chip, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Link from 'next/link';



const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        type: 'number',
    },
    {
        field: 'fullname',
        headerName: 'Nombre Completo',
        width: 300,
    },
    {
        field: 'paid',
        headerName: 'Pago',
        description: 'Muestra si esta pago o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid ?
                <Chip label="Pagado" color="success" variant='outlined'/> :
                <Chip label="No Pagado" color="error" variant='outlined'/>
            )
        }   
    },
    {
        field: 'order',
        headerName: 'Ver Orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Link
                    href={
                    `/orders/${params.row.id}`
                    }
                    passHref
                >
                    Ver Orden de pago
                </Link>
            )
        }   
    }
];

const rows =[
    {
        id: 1,
        paid: true,
        fullname: 'Martin Martin'
    },
    {
        id: 2,
        paid: false,
        fullname: 'Cosme Fulanito'
    },
    {
        id: 3,
        paid: false,
        fullname: 'Homero Thompson'
    },
    {
        id: 4,
        paid: true,
        fullname: 'Melissa Flores'
    },
    {
        id: 5,
        paid: false,
        fullname: 'Gonzalo Herrera'
    }
]


const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de Ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        <Typography variant="h1" component={'h1'}>Historial de Ordenes</Typography>

        <Grid container>

            <Grid item xs={12} sx={{
                height: 650,
                width: '100%',
            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 25, 100]}
                />
            </Grid>
    

        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage;