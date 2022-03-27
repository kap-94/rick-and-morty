import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

export default function SearchBar({ searchText, handleSearch, handleInputChange }) {
    return (
        <Box
            component='form'
            noValidate
            autoComplete='off'
            sx={{
                '& > :not(style)': { my: '.825rem', w: '17.5rem' }
            }}
        >
            <TextField
                name='searchText' color='secondary' focused
                id='outlined-basic' label='Characters and Episodes' variant='outlined'
                onChange={handleInputChange} value={searchText}
                sx={{ color: '#fff' }}
            />
        </Box>
    )
}
