import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalInstructions() {
  const [open, setOpen] = React.useState(true)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content >
        
        <button className='begin' onClick={() => setOpen(false)}>
          EMPEZAR
        </button>
        
              </Modal.Content>

    </Modal>
  )
}

export default ModalInstructions