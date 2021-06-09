import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { QuestModal } from '../components/Modal'
import { Header } from '../components/Header'
import { Question } from '../components/Question'

const useHome = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    background: '#f0f2f5'
  }
})

function App() {
  const { container } = useHome()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className={container}>
      <Header func={toggleModal} />
      <Question />
      <QuestModal isOpen={isModalOpen} />
    </div>
  );
}

export default App;
