import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import useForm from '../hooks/useForm'

import { getCharacters, getEpisodes } from '../helpers/helpers'

import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import SearchBar from '../components/SearchBar'
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
  const [totalCharacters, setTotalCharacters] = useState(0)
  const [totalEpisodes, setTotalEpisodes] = useState(0)
  const [pageCharacter, setPageCharacter] = useState(1)
  const [pageEpisode, setPageEpisode] = useState(1)

  const totalCharacterPages = Math.ceil(totalCharacters / 20)
  const totalEpisodePages = Math.ceil(totalEpisodes / 20)

  const location = useLocation()

  const { searchText: q = '' } = queryString.parse(location.search)

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q
  })

  useEffect(() => {
    const search = async function () {
      const { characters, count: totalCharacters } = await getCharacters(searchText, pageCharacter)
      const { episodes, count: totalEpisodes } = await getEpisodes(searchText, pageEpisode)

      setCharacters(characters)
      setTotalCharacters(totalCharacters)

      setEpisodes(episodes)
      setTotalEpisodes(totalEpisodes)
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

  const handleCharacterPageChange = (_, val) => {
    setPageCharacter(val)
  }

  const handleEpisodePageChange = (_, val) => {
    setPageEpisode(val)
  }

  return (
    <SearchPageContainer>
      <Grid container justifyContent='center'>
        <SearchBar searchText={searchText} handleInputChange={handleInputChange} />
      </Grid>

      <Grid container sx={{ display: 'flex', alignItems: 'start', minHeight: '100vh', p: '2rem 0', mt: 5 }}>
        <Grid item container xs={12} sm={6}>
          <Typography variant='h4' sx={{ m: 'auto', mb: '1.5rem' }} >Characters</Typography>
          <Stack spacing={2} direction={'row'} justifyContent='center' alignItems={'center'}>
            <Pagination count={totalCharacterPages} onChange={handleCharacterPageChange} color="secondary" />
          </Stack>          {
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

          <Stack spacing={2}>
            <Pagination count={totalEpisodePages} onChange={handleEpisodePageChange} color="secondary" />
          </Stack>

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

