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

    const { results: characters, info: { count } } = !!data && data

    return { characters, count }

  } catch (error) {

    return { characters: [], count: 0 }
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

    const { results: episodes, info: { count } } = !!data && data

    return { episodes, count }

  } catch (error) {

    return { episodes: [], count: 0 }

  }
}