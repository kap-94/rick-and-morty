import useCounter from '../hooks/useCounter'
import axios from 'axios'

import { types } from '../types/types'

export const fetchEpisodesStart = () => ({
  type: types.FETCH_EPISODES_START
})

export const fetchEpisodes = () => {
  return (dispatch) => {
    // const { counter, ikncrement } = useCounter(1)

    dispatch(fetchEpisodesStart())

    axios.get('https://rickandmortyapi.com/api/episode/?page=3&limit=9')
      .then(response => {
        const data = response.data
        const { results: episodes } = !!data && data

        dispatch(fetchEpisodesSuccess(episodes))
      }).catch(error => {
        const errorMsg = error.message

        dispatch(fetchEpisodesError(errorMsg))
      })
  }
}

export const fetchEpisodesSuccess = (episodes) => ({
  type: types.FETCH_EPISODES_SUCCESS,
  payload: episodes

})

export const fetchEpisodesError = (errorMessage) => ({
  type: types.FETCH_EPISODES_ERROR,
  payload: errorMessage

})
