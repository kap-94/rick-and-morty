import { types } from '../types/types'

const INITIAL_STATE = {
  characters: [],
  loadingCharacters: false,
  currentCharacter: {},
  loadingCurrentCharacter: false,
  error: 'undefined'
}

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS_START:
      return {
        ...state,
        loadingCharacters: true
      }

    case types.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        loadingCharacters: false
      }

    case types.FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        loadingCharacters: false,
        error: 'error'
      }

    case types.FETCH_CHARACTER_START:
      return {
        ...state,
        loadingCurrentCharacter: true
      }

    case types.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        currentCharacter: {
          ...action.payload
        },

        loadingCurrentCharacter: false
      }

    case types.FETCH_CHARACTER_ERROR:
      return {
        ...state,
        loadingCurrentCharacter: false,
        error: 'error'
      }

    default:
      return state
  }
}

export default charactersReducer
