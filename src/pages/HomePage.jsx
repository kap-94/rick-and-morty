import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters } from '../actions/characters'
import { fetchEpisodes } from '../actions/episodes'

import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import 'animate.css'

import EpisodeCard from '../components/EpisodeCard'
import CharacterCard from '../components/CharacterCard'

const HomePageContainer = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: '2rem',
  paddingTop: '3rem',
  minHeight: '100vh'
}))

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
    dispatch(fetchEpisodes())
  }, [dispatch])

  const { loadingCharacters, characters } = useSelector(state => state.characters)
  const { loadingEpisodes, episodes } = useSelector(state => state.episodes)

  return (
    <HomePageContainer>
      <Grid container sx={{ display: 'flex', alignItems: 'start' }}>
        {
                    loadingCharacters
                      ? (
                        <div>Loading...</div>
                        )
                      : (
                        <Grid item container xs={12} sm={6}>
                          <Typography sx={{ m: 'auto', mb: '1.5rem' }} variant='h4'>New Characters</Typography>

                          <Grid item container spacing={{ xs: 3 }} columns={{ xs: 4, sm: 8 }}>
                            {characters.filter((_, idx) => idx < 9).sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                              .map((character, idx) => (
                                <Grid item xs={4} key={character.id}>
                                  <CharacterCard info={character} />
                                </Grid>
                              ))}
                          </Grid>
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
                          <Typography sx={{ m: 'auto', mb: '1.5rem' }} variant='h4'>Latest Episodes</Typography>

                          <Grid item container>
                            {episodes.filter((_, idx) => idx < 9).sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                              .map((episode, idx) => (
                                <EpisodeCard key={episode.id} info={episode} />
                              ))}
                          </Grid>
                        </Grid>
                        )
                }
      </Grid>
    </HomePageContainer>
  )
}

export default HomePage
