import React from 'react'
import Grid from '@mui/material/Grid'
import EpisodeCard from './EpisodeCard'


const EpisodesList = function ({ episodes }) {
    return (
        <Grid item container>
            {episodes.filter((_, idx) => idx < 9)
                .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                .map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                ))}
        </Grid>
    )
}

export default EpisodesList