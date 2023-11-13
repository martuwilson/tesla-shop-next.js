import React, {FC} from 'react'

import { ISize } from '@/interfaces';
import {Box, Button } from '@mui/material'

interface Props {
    selectedSize?: ISize;
    sizes: ISize[];
}

export const SizeSelector:FC<Props> = ({selectedSize, sizes}) => {
  return (
    <Box>
        {
            sizes.map((size, index) => (
                <Button
                    key={index}
                    size='small'
                    color={selectedSize === size ? 'secondary' : 'info'}
                >
                    {size}
                </Button>
            ))
        }
    </Box>
  )
}
