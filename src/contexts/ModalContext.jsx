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
        toggleModal()
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
