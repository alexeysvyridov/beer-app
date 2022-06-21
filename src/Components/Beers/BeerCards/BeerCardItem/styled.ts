import styled from "styled-components";

export const Card = styled.div`
  width: 500px;
  height: 120px;
  border: 1px solid rgb(55, 65, 81);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  alignItems: center;
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
`;
export const CardRow = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

export const Favorite = styled.button<{isFavorite: boolean}>`
  all: unset;
  color: ${({isFavorite}) => isFavorite ? 'yellow' : 'transparent'};
  cursor: pointer;
`;  