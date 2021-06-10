import React, { createContext, useContext, useEffect, useState } from 'react'

const ModalContext = createContext({})

export const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [questionsQuantity, setQuestionsQuantity] = useState(0)
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen)
    }

    const selectQuestionsQuantity = (qtd) => {
        setQuestionsQuantity(Number(qtd))
    }

    useEffect(()=>{
        const hasQuestions = (JSON.parse(localStorage.getItem('questions'))).length>0
        if(!hasQuestions) {
            toggleModal()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <ModalContext.Provider value={{
            selectQuestionsQuantity,
            toggleModal,
            isModalOpen,
            questionsQuantity
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default function useModal() {
    return useContext(ModalContext)
}
