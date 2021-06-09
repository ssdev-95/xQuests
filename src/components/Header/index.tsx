import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, Button } from '@material-ui/core'

const useHeader = makeStyles({
    header: {
        background: 'blue',
        width: '100vw',
        heght: '15vh'
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
