import { Button } from "@mui/material"
import { Portal } from "../../Portal"
import { ImageWrapper, Modal, ModalBody, ModalContainer, ModalTitle } from "./styled"
type RemoveFavoriteModalProps = {
    onCloseClick: () => void,
    onRemoveConfirm: () => void,
}
export const RemoveFavoriteModal = ({
    onCloseClick,
    onRemoveConfirm,
}: RemoveFavoriteModalProps): JSX.Element => {
    return (
        <Portal
            className="modal-root"
        >
            <ModalContainer>
                <Modal>
                    <ModalTitle>
                        <ImageWrapper onClick={onCloseClick} />
                    </ModalTitle>
                    <ModalBody>
                        Are you sure? do you want to delete all favorites?
                    </ModalBody>
                    <Button
                        variant="contained"
                        fullWidth
                        color="error"
                        onClick={onRemoveConfirm}
                    >Remove confirm</Button>
                </Modal>
            </ModalContainer>
        </Portal>
    )
}