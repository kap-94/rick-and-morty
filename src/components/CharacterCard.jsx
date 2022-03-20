import * as React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'

const CharacterCard = ({ character }) => {
  const { id, image, name } = character

  return (
    <Card className='animate__animated animate__fadeIn'>
      <CardMedia
        component='img'
        height='250'
        image={image}
        alt={name}
      />

      <CardHeader
        title={name}
        sx={{
          textAlign: 'center',
          backgroundColor: '#DCE8F2',
          color: theme => theme.palette.primary.main
        }}
      />

      <Box sx={{
        backgroundColor: theme => theme.palette.primary.dark,
        textAlign: 'center',
        padding: '1rem'
      }}
      >
        <Link
          to={`/character/${id}`} style={{
            textDecoration: 'none', color: '#6ECCAF'
          }}
        >More Info &rarr;
        </Link>
      </Box>
    </Card>
  )
}

export default CharacterCard
