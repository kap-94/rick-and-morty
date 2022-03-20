import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams, useNavigate } from 'react-router-dom'

import { fetchOneCharacter } from '../actions/characters'

import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

const CharacterPageContainer = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  minHeight: '100vh',
  padding: '2rem',
  paddingTop: 0
}))

const CharacterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchOneCharacter(id))
  }, [dispatch, id])

  const isLoading = useSelector(state => state.characters.loadingCurrentCharacter)
  const character = useSelector(state => state.characters.currentCharacter)

  if (!character) {
    return <Navigate to='/' />
  }

  const { image, name, origin, species, status, gender } = character

  const handleReturn = () => {
    navigate('/')
    // navigate(-1)
  }

  return (
    <CharacterPageContainer>
      {
        isLoading
          ? (<div>Loading...</div>)
          
          : (<Grid container sx={{ display: 'flex', alignItems: 'start', padding: '5vw' }}>
            <Grid item container xs={12} sm={6}>
              <CardMedia
                className='animate__animated animate__fadeInLeft'
                component='img'
                height='500'
                image={image}
                alt={name}
              />
            </Grid>

            <Grid item container justifyContent='center' alignItems='center' xs={12} sm={6}>
              <Box sx={{ w: 100, textAlign: 'center', mb: '2.5rem' }}>
                <Grid item sx={{ mb: '1.5rem' }}>
                  <Typography variant='h3'>{name || ''}</Typography>
                </Grid>

                <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 2 }}>
                  <Typography variant='subtitle2'>Status: </Typography>
                  <Typography variant='subtitle2'>{status || ''}</Typography>
                </Grid>

                <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 2 }}>
                  <Typography variant='subtitle2'>Species: </Typography>
                  <Typography variant='subtitle2'>{species || ''}</Typography>
                </Grid>

                <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 2 }}>
                  <Typography variant='subtitle2'>Gender: </Typography>
                  <Typography variant='subtitle2'>{gender || ''}</Typography>
                </Grid>

                <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 2 }}>
                  <Typography variant='subtitle2'>Origin: </Typography>
                  <Typography variant='subtitle2'>{origin ? origin.name : ''}</Typography>
                </Grid>
              </Box>

              <Stack spacing={2} direction='row' justifyContent='center' sx={{ width: '100%', mt: '1rem', backgroundColor: theme => theme.palette.primary.main }}>
                <Button
                  type='submit' onClick={handleReturn} variant='contained' sx={[
                    {
                      backgroundColor: theme => theme.palette.secondary.main,
                      color: theme => theme.palette.primary.dark,

                      '&:hover': {
                        backgroundColor: theme => theme.palette.secondary.dark
                      }
                    }
                  ]}
                >Return
                </Button>
              </Stack>
            </Grid>
          </Grid>
          )
      }
    </CharacterPageContainer>
  )
}

export default CharacterPage
