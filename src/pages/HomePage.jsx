import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters } from '../actions/characters'
import { fetchEpisodes } from '../actions/episodes'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import 'animate.css'

import CharactersList from '../components/CharactersList'
import EpisodesList from '../components/EpisodesList'


export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
    dispatch(fetchEpisodes())
  }, [])

  const { loadingCharacters, characters } = useSelector(state => state.characters)
  const { loadingEpisodes, episodes } = useSelector(state => state.episodes)

  return (
    <Grid container sx={{
      display: 'flex',
      alignItems: 'start',
      backgroundColor: theme => theme.palette.primary.main,
      color: theme => theme.palette.primary.contrastText,
      minHeight: '100vh',
      padding: '2rem',
      paddingTop: '3rem',
    }}>
      {
        loadingCharacters
          ? (
            <div>Loading...</div>
          )
          : (
            <Grid item container xs={12} sm={6}>
              <Typography sx={{ m: 'auto', mb: '1.5rem' }} variant='h4'>New Characters</Typography>
              <CharactersList characters={characters} />
            </Grid>
          )
      }

      {
        loadingEpisodes
          ? (
            <div>Loading...</div>
          )
          : (
            <Grid item container xs={12} sm={6} sx={{ px: 3 }}>
              <Typography variant='h4' sx={{ m: 'auto', mb: '1.5rem' }} >Latest Episodes</Typography>

              <Grid item container>
                <EpisodesList episodes={episodes} />
              </Grid>
            </Grid>
          )
      }
    </Grid>
  )
}

