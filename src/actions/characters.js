import axios from 'axios'

import { types } from '../types/types'

export const fetchCharactersStart = () => ({
  type: types.FETCH_CHARACTERS_START
})

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersStart())

    axios.get('https://rickandmortyapi.com/api/character/?page=42&limit=9')
      .then(response => {
        const data = response.data
        const { results: characters } = !!data && data
        dispatch(fetchCharactersSuccess(characters))
        
      }).catch(error => {
        const errorMsg = error.message
        dispatch(fetchCharactersError(errorMsg))
      })
  }
}

export const fetchCharactersSuccess = (characters) => ({
  type: types.FETCH_CHARACTERS_SUCCESS,
  payload: characters
})

export const fetchCharactersError = (errorMessage) => ({
  type: types.FETCH_CHARACTERS_ERROR,
  payload: errorMessage
})

export const fetchOneCharacterStart = () => ({
  type: types.FETCH_CHARACTER_START
})

export const fetchOneCharacter = (id) => {
  return (dispatch) => {
    dispatch(fetchOneCharacterStart())

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        const data = response.data
        dispatch(fetchOneCharacterSuccess(data))

      }).catch(error => {
        const errorMsg = error.message
        dispatch(fetchOneCharacterError(errorMsg))
      })
  }
}

export const fetchOneCharacterSuccess = (characters) => ({
  type: types.FETCH_CHARACTER_SUCCESS,
  payload: characters
})

export const fetchOneCharacterError = (errorMessage) => ({
  type: types.FETCH_CHARACTER_ERROR,
  payload: errorMessage
})
