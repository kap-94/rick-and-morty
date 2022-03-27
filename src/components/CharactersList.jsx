import React from 'react'
import Grid from '@mui/material/Grid'
import CharacterCard from '../components/CharacterCard'

const CharactersList = function ({ characters }) {
    return (
        <Grid item container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8 }}>
            {characters.filter((_, idx) => idx < 9)
                .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                .map((character) => (
                    <Grid item xs={4} key={character.id}>
                        <CharacterCard character={character} />
                    </Grid>
                ))}
        </Grid>
    )
}

export default CharactersList