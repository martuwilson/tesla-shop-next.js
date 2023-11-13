import {FC} from 'react'

import {Box, IconButton, Typography} from '@mui/material'
import {RemoveCircleOutline, AddCircleOutline} from '@mui/icons-material'

interface CounterProps{

}

export const ItemCounter:FC<CounterProps> = () => {
  return (
    <Box
        display='flex'
        alignItems='center'
    >
        <IconButton>
            <RemoveCircleOutline/>
        </IconButton>
        <Typography
        sx={{
            width: 40,
            textAlign: 'center'
        }}
        >
            1
        </Typography>
        <IconButton>
            <AddCircleOutline/>
        </IconButton>
    </Box>
  )
}
