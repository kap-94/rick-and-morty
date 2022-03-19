import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

import { Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

import HomePage from './pages/HomePage'
import CharacterPage from './pages/CharacterPage'
import SearchPage from './pages/SearchPage'
import ResponsiveAppBar from './components/ResponsiveAppBar'

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='character/:id' element={<CharacterPage />} />
          <Route path='search' element={<SearchPage />} />
        </Routes>

      </ThemeProvider>
    </Provider>
  )
}

export default App
