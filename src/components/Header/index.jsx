import React from 'react'

import { Toolbar, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useHeader = makeStyles({
    header: {
        background: 'blue',
        width: '100vw',
        heght: '15vh',
        color: '#f0f2f5'
    }
})

export const Header = ({ func }) => {
    const { header } = useHeader()

    return (
        <Toolbar className={header}>
            <p>Welcome to the world of quests</p>
            <Button onClick={func}>LOL</Button>
        </Toolbar>
    )
}
