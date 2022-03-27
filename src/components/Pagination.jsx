import React from 'react'
import Box from '@mui/material/Box'
import CustomButton from '../components/CustomButton'

export default function Pagination({ lastPage, nextPage, list }) {
    return (
        <Box sx={{ m: 'auto', mb: 2 }}>
            <CustomButton type='button' onClick={ () => lastPage()} sx={{ mr: 1.5 }} >
                &larr;
            </CustomButton>
            {
                list.length !== 0 &&
                <CustomButton type='button' onClick={ () => nextPage()}  >
                    &rarr;
                </CustomButton>
            }
        </Box>
    )
}

