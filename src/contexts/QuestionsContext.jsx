/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react'
import useModal from './ModalContext'

import axios from 'axios'

// Quest: {
//     category: string;
//     correct_answer: string;
//     incorrect_answers: string[];
//     difficult: string;
//     question: string;
//     type: string;
// }

const QuestionsContext = createContext({})

export const QuestionsProvider = ({children}) => {
    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions'))||[])
    const { questionsQuantity, toggleModal } = useModal()

    const mountQuestions = async () => {
        const uri = `${process.env.REACT_APP_API_URI}=${questionsQuantity}`
        const {data} = await axios.get(uri)
        // https://opentdb.com/api.php?amount=QTD

        const quests = data.results.map(res=>({
            type: res.type,
            category: res.category,
            difficulty: res.difficulty,
            question: res.question,
            answers: [res.correct_answer, ...res.incorrect_answers],
            correct_answer: 0
        }))

        setQuestions(quests)

        toggleModal()
    }

    useEffect(()=>{
        localStorage.setItem('questions', JSON.stringify(questions))
    }, [questions])

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
