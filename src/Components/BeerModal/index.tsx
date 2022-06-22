import React from 'react'
import ReactDOM from 'react-dom';
import { Portal } from '../Portal';
import CancelIcon from '@mui/icons-material/Cancel';
import { ImageWrapper, ModalContainer, ModalContent, ModalTitle } from './styled';
type BeerModalProps = {
  isOpen: boolean,
  onCloseClick: () => void,
}

export const BeerModal = ({
  isOpen,
  onCloseClick,
}: BeerModalProps): JSX.Element => {
  return (
    <Portal
      el="div"
      className="modal-root"
    >
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>
              <ImageWrapper onClick={onCloseClick} />
            </ModalTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae nulla dolores quos placeat deleniti ipsum debitis nemo, ut provident commodi nisi nesciunt repellendus iste. Temporibus aperiam consequatur fuga sint?
          </ModalContent>
        </ModalContainer>
      )}
    </Portal>
  )
}
