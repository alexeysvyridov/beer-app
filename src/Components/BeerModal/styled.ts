import styled, { css } from "styled-components";
import CancelIcon from '@mui/icons-material/Cancel';

const cssByCenter = css`
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const ModalContainer = styled.div`
  ${cssByCenter}
  display: block;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
export const ModalContent = styled.div`
  ${cssByCenter};
  display: block;
  width: 600px;
  height: auto;
  z-index: 2;
  background-color: #fff;
  border-radius: 10px;
  padding: 24px 48px;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 32px;
`;

export const ImageWrapper = styled(CancelIcon)`
  width: 32px;
  height: 32px;
  color: #130f35;
  opacity: 0.34;
  cursor: pointer;
  :hover {
    color: #130f35;
    opacity: 1;
  }
`;

export const Image = styled.div<{ imageUrl: string }>`
  height: 250px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  object-fit: cover;
`;
export const ModalBody = styled.div`
  margin: 48px 0px;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.25px;
  opacity: 0.6;
  font-weight: bold;
  color: #ec0982;
`;
export const Description = styled.div`
  margin: 24px 0px;
  font-size: 24px;
`;
