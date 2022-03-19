import { types } from '../types/types'

const INITIAL_STATE = {
  episodes: [],
  loadingEpisodes: false,
  error: 'undefined'
}

const episodesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_EPISODES_START:
      return {
        ...state,
        loadingEpisodes: true
      }

    case types.FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.payload,
        loadingEpisodes: false
      }

    case types.FETCH_EPISODES_ERROR:
      return {
        ...state,
        loadingEpisodes: false,
        error: 'error'
      }

    default:
      return state
  }
}

export default episodesReducer
