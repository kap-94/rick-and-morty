import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import useCounter from '../hooks/useCounter'
import useForm from '../hooks/useForm'

import { getCharacters, getEpisodes } from '../helpers/helpers'

import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import CharactersList from '../components/CharactersList'
import EpisodesList from '../components/EpisodesList'


const SearchPageContainer = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: '2rem',
  paddingTop: 0
}))

export default function SearchPage() {
  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])

  const location = useLocation()

  const { searchText: q = '' } = queryString.parse(location.search)

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q
  })


  const { counter: pageCharacter, increment: nextCharPage, decrement: lastCharPage } = useCounter(1)
  const { counter: pageEpisode, increment: nextEpisodePage, decrement: lastEpisodePage } = useCounter(1)

  useEffect(() => {
    const search = async function () {
      const resCharacters = await getCharacters(searchText, pageCharacter)
      const resEpisodes = await getEpisodes(searchText, pageEpisode)

      setCharacters(resCharacters)
      setEpisodes(resEpisodes)
    }

    if (searchText && !characters.length && !episodes.length) {
      // If is the first time that the component is rendered 
      search()
    } else {
      const timeoutId = setTimeout(() => {
        search()
      }, 500)

      return () => {
        clearTimeout(timeoutId)
      }
    }

  }, [searchText, pageCharacter, pageEpisode])

  return (
    <SearchPageContainer>
      <Grid container justifyContent='center'>
        <SearchBar searchText={searchText} handleInputChange={handleInputChange} />
      </Grid>

      <Grid container sx={{ display: 'flex', alignItems: 'start', minHeight: '100vh', p: '2rem 0', mt: 5 }}>
        <Grid item container xs={12} sm={6}>
          <Typography variant='h4' sx={{ m: 'auto', mb: '1.5rem' }} >Characters</Typography>
          <Pagination lastPage={lastCharPage} nextPage={nextCharPage} list={characters} />
          {
            (searchText === '' && characters.length === 0)
              ?
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <h1>Loading...</h1>
              </Box>
              :
              (characters.length === 0)
                ?
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <h1>No results</h1>
                </Box>
                :
                <CharactersList characters={characters} />
          }
        </Grid>

        <Grid item container xs={12} sm={6} sx={{ px: 3 }}>
          <Typography variant='h4' sx={{ m: 'auto', mb: '1.5rem' }} >Episodes</Typography>
          <Pagination lastPage={lastEpisodePage} nextPage={nextEpisodePage} list={episodes} />
          {

            (searchText === '' && episodes.length === 0)
              ?
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <h1>Loading...</h1>
              </Box>
              :
              (episodes.length === 0)
                ?
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <h1>No results</h1>
                </Box>
                :
                <EpisodesList episodes={episodes} />

          }
        </Grid>
      </Grid>
    </SearchPageContainer>
  )
}

