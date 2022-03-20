import * as React from 'react'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const EpisodeCard = ({ episode }) => {
  const { url, name, code, air_date } = episode

  return (
    <Paper
      className='animate__animated animate__fadeIn'
      sx={{
        p: 3,
        margin: 'auto',
        marginBottom: '1.25rem',
        maxWidth: '100%',
        flexGrow: 1,
        overflow: 'hidden',
        backgroundColor: (theme) =>
          theme.palette.primary.light
      }}
    >
      <Grid container spacing={2}>

        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {name}
              </Typography>

              <Typography variant='body1' gutterBottom>
                {url}
              </Typography>

              <Typography variant='body1'>
                {air_date}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1' component='div'>
              {code}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default EpisodeCard
