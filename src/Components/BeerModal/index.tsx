import React from 'react'
import { Portal } from '../Portal';
import { Description, FoodItem, Image, ImageWrapper, ModalBody, ModalContainer, ModalContent, ModalTitle } from './styled';
type BeerModalProps = {
  isOpen: boolean,
  onCloseClick: () => void,
  selectedBeer?: any // to do change type
}

export const BeerModal = ({
  isOpen,
  onCloseClick,
  selectedBeer,
}: BeerModalProps): JSX.Element => {
  return (
    <Portal
      className="modal-root"
    >
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>
              <ImageWrapper onClick={onCloseClick} />
            </ModalTitle>
            <Image imageUrl={selectedBeer?.image_url} />
            <Description>
              {selectedBeer?.description}
            </Description>
            {selectedBeer?.food_pairing.map((food: string) => {
              return (
                <FoodItem>
                  * {food}
                </FoodItem>
              )
            })}
            <ModalBody>
              {selectedBeer?.brewers_tips}
            </ModalBody>
          </ModalContent>
        </ModalContainer>
      )}
    </Portal>
  )
}

BeerModal.defaultProps = {
  selectedBeer: undefined,
}