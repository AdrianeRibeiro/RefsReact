import React, { useRef, useCallback } from 'react';
import Input from './components/Input'
import Modal from './components/Modal'

function App() {
  const nameInputRef = useRef(null)
  const acceptTermsRef = useRef({ value: false })
  const modalRef = useRef(null)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (nameInputRef.current != null) {
      console.log(nameInputRef.current.value)
    }

    console.log(acceptTermsRef.current.value)
  },[])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  const handleOpenModal = useCallback(() => {
    if(modalRef.current != null) {
      modalRef.current.openModal()
    }
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        
        <Input 
          name="name" 
          label="Nome Completo" 
          placeholder="Digite seu nome"
          ref={nameInputRef}
        />
      
        <button type="button" onClick={handleAcceptTerms}>
          Aceitar termos
        </button>

        <button type="submit">Enviar</button>

        <button onClick={handleOpenModal}> Abrir Modal </button>
        <Modal ref={modalRef}/>
      </form>
    </div>
  );
}

export default App;
