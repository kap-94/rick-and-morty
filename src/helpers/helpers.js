import axios from 'axios'

export const getCharacters = async function (searchText, page) {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character',
      {
        params: {
          name: searchText,
          page
        }
      })

    const data = await response.data
    const { results: characters } = !!data && data
    return characters

  } catch (error) {

    return []
  }
}

export const getEpisodes = async function (searchText, page) {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/episode?',
      {
        params: {
          name: searchText,
          page
        }
      }
    )
    const data = await response.data
    const { results: episodes } = !!data && data
    return episodes

  } catch (error) {

    return []
  }
}