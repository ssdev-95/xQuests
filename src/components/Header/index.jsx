import React from 'react'

import { Toolbar, Button } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import { makeStyles } from '@material-ui/core/styles'

const useHeader = makeStyles({
    header: {
        background: 'blue',
        width: '100vw',
        heght: '15vh',
        color: '#f0f2f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: '0.5rem',
        height:'2rem',
        filter: 'invert(100%)'
    }
})

export const Header = ({ func }) => {
    const { header, button } = useHeader()

    return (
        <Toolbar className={header}>
            <p>Welcome to the world of quests</p>
            <Button className={button} onClick={func}>
                <ReplayIcon />
            </Button>
        </Toolbar>
    )
}
