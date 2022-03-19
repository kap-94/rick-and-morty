import * as React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const ResponsiveAppBar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>

          <Typography
            variant='h3'
            noWrap
            component='div'
            sx={{ mx: 'auto', p: '1.5rem', display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: '#6ECCAF' }}>
              Rick and Morty
            </Link>
          </Typography>

          <Typography
            variant='h5'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: '#6ECCAF' }}>
              Rick and Morty
            </Link>
          </Typography>

        </Toolbar>
      </Container>

      <Container sx={{ display: 'flex', justifyContent: 'center', mb: '1.35rem' }}>
        <Link to='/' style={{ textDecoration: 'none', color: '#6ECCAF', marginRight: '2rem' }}>Home</Link>
        <Link to='search' style={{ textDecoration: 'none', color: '#6ECCAF' }}>Search</Link>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
