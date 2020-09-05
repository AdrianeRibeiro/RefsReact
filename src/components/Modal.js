import React, { useState, useCallback, useImperativeHandle } from 'react'

const Modal = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(true)

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  if(!visible) {
    return null
  }

  return (
    <div>
      Modal aberto
      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  )
})


export default Modal