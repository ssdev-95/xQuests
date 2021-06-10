/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react'
import useModal from './ModalContext'

import axios from 'axios'

const QuestionsContext = createContext({})

export const QuestionsProvider = ({children}) => {
    const [questions, setQuestions] = useState([])
    const { questionsQuantity, toggleModal } = useModal()

    const mountQuestions = async () => {
        const uri = `${process.env.REACT_API_URI}=${questionsQuantity}`
        // const data = await axios.get(uri)
        //https://opentdb.com/api.php?amount=QTD

        // const quests = [...data]

        // setQuestions(quests)

        console.log(uri)

        toggleModal()
    }

    return (
        <QuestionsContext.Provider value={{
            questions,
            mountQuestions
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export default function useQuestions() {
    return useContext(QuestionsContext)
}
