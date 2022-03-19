import { useState, useEffect } from 'react'
import axios from 'axios'

import useCounter from '../hooks/useCounter'
import useForm from '../hooks/useForm'

// import queryString from 'quesry-string'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

import EpisodeCard from '../components/EpisodeCard'
import CharacterCard from '../components/CharacterCard'

const SearchPageContainer = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: '2rem',
  paddingTop: 0
}))

const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  height: '2.25rem',
  lineHeight: 1.75,
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  minWidth: '64px',
  padding: '6px 16px',
  borderRadius: '4px',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light
  }
}))

const SearchPage = () => {
  // const { q = '' } = queryString.parse(location.search);
  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])

  const { counter: pageCharacter, increment: nextCharPage, decrement: lastCharPage, reset } = useCounter(1)
  const { counter: pageEpisode, increment: nextExpisodePage, decrement: lastEpisodePage } = useCounter(1)
  
  const [{ searchText }, handleInputChange] = useForm({
    searchText: ''
  })

  useEffect(() => {
    getCharacters(pageCharacter)
    getEpisodes(pageEpisode)
  }, [pageCharacter, pageEpisode])

  const getCharacters = async (page) => {
    const responseCharacters = await axios(
            `https://rickandmortyapi.com/api/character/?name=${searchText}&page=${page}`
    )
    const dataCharacters = await responseCharacters.data
    const { results: characters } = !!dataCharacters && dataCharacters

    setCharacters(characters)
  }

  const getEpisodes = async (page) => {
    const responseEpisodes = await axios(
            `https://rickandmortyapi.com/api/episode/?name=${searchText}&page=${page}`
    )
    const dataEpisodes = await responseEpisodes.data
    const { results: episodes } = !!dataEpisodes && dataEpisodes

    setEpisodes(episodes)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    reset()
    getCharacters(pageCharacter)
    getEpisodes(pageEpisode)
    // navigate(`?q=${searchText}`)
  }

  return (
    <SearchPageContainer>
      <Grid container justifyContent='center'>
        <Box
          component='form'
          onSubmit={handleSearch}
          sx={{
            '& > :not(style)': { my: '.825rem', w: '17.5rem' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            name='searchText'
            id='outlined-basic' label='Characters and Episodes' variant='outlined' onChange={handleInputChange} value={searchText} sx={{ backgroundColor: theme => theme.palette.common.white }}
          />

          <Stack spacing={2} direction='row' justifyContent='center' sx={{ width: '100%', backgroundColor: theme => theme.palette.primary.main }}>
            <StyledButton type='submit'>Search</StyledButton>
          </Stack>
        </Box>
      </Grid>

      <Grid container sx={{ display: 'flex', alignItems: 'start', minHeight: '100vh', p: '2rem 0', mt: 5 }}>
        <Grid item container xs={12} sm={6}>

          <Typography sx={{ m: 'auto', mb: '1.5rem' }} variant='h4'>Characters</Typography>

          <Box sx={{ m: 'auto', mb: 2 }}>
            <StyledButton
              type='button' onClick={lastCharPage} sx={{ mr: 1.5 }}
            >&larr;
            </StyledButton>
            <StyledButton
              type='button' onClick={nextCharPage}
            >&rarr;
            </StyledButton>
          </Box>

          <Grid item container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8 }}>
            {characters.filter((_, idx) => idx < 9).map((character, idx) => (
              <Grid item xs={4} sm={4} key={character.id} sx={{ mb: 3 }}>
                <CharacterCard info={character} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6} sx={{ px: 3 }}>
          <Typography sx={{ m: 'auto', mb: '1.5rem' }} variant='h4'>Episodes</Typography>

          <Box sx={{ m: 'auto', mb: 2 }}>
            <StyledButton
              type='button' onClick={lastEpisodePage} sx={{ mr: 1.5 }}
            >&larr;
            </StyledButton>
            <StyledButton
              type='button' onClick={nextExpisodePage}
            >&rarr;
            </StyledButton>
          </Box>

          <Grid item container>
            {episodes.filter((_, idx) => idx < 9).map((episode, idx) => (
              <EpisodeCard key={episode.id} info={episode} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SearchPageContainer>
  )
}

export default SearchPage
