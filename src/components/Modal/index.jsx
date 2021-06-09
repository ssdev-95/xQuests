import React from 'react'

import { Modal } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useModal = makeStyles({
    modal: {
        background: 'red',
        height: '15rem',
        width: '15rem',
        borderRadius: '4px',
        zIndex: '66'
    }
})

export const QuestModal = ({isOpen}) => {
    const { modal } = useModal()

    return (
        <Modal open={isOpen} className={modal} >
            <h1>lmao</h1>
        </Modal>
    )
}
