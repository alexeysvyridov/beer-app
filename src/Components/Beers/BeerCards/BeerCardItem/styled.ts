import { Button } from "@mui/material";
import styled from "styled-components";

export const Card = styled.div`
  width: 500px;
  border: 1px solid rgb(55, 65, 81);
  border-radius: 12px;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #f3f3f3;
  }
  display: flex;
  flex-direction: column;
  height: 250px;
`;

export const CardImage = styled.div<{imageUrl: string}>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  height: 100%;
  width: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex: 1;
`;
export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2;
  flex: 1;
`;
export const CardRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 15px;
`;

export const Favorite = styled(Button)<{isFavorite: boolean}>`
  cursor: pointer;
  width: 100%;
`;  