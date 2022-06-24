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

export const Modal = styled.div`
    ${cssByCenter};
    color: red;
    width: 480px;
    height: 220px;
    background-color: #fff;
    border-radius: 4px;
    padding: 24px 48px;
`;

export const ModalBody = styled.h1`
    color: red;
    text-align: center;
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
