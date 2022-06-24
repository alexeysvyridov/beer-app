import React from 'react'
import { Card, CardImage, CardRow, CardTitle, Favorite } from './styled'
import StarIcon from '@mui/icons-material/Star';

type BeerCardItemProps = {
  imageUrl: string,
  name: string,
  isFavorite: boolean,
  onOpenClick: () => void,
  onAddToFavorite: (e: React.FormEvent) => void,
  onRemoveFavorite: (e: React.FormEvent) => void,
}

export const BeerCardItem = ({
  imageUrl,
  name,
  isFavorite,
  onOpenClick,
  onAddToFavorite,
  onRemoveFavorite,
}: BeerCardItemProps): JSX.Element => {
  return (
    <Card title={`Show more about ${name}`} onClick={onOpenClick}>
      <CardImage imageUrl={imageUrl} />
      <CardRow>
        <CardTitle>
          {name}
        </CardTitle>
        <Favorite isFavorite={isFavorite} onClick={isFavorite ? onRemoveFavorite : onAddToFavorite}>
          <StarIcon />
        </Favorite>
      </CardRow>
    </Card>
  )
}
