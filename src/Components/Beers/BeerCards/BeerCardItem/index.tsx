import React from 'react'
import Rating from '@mui/material/Rating'
import { Card, CardImage, CardRow, CardTitle, Favorite } from './styled'
import StarIcon from '@mui/icons-material/Star';
import { Stack } from '@mui/material';

type BeerCardItemProps = {
  imageUrl: string,
  name: string,
  isFavorite: boolean,
  onOpenClick: () => void,
  onAddToFavorite: (e: React.FormEvent) => void,
  onRemoveFavorite: (e: React.FormEvent) => void,
  withRaiting: boolean | undefined,
}

export const BeerCardItem = ({
  imageUrl,
  name,
  isFavorite,
  onOpenClick,
  onAddToFavorite,
  onRemoveFavorite,
  withRaiting,
}: BeerCardItemProps): JSX.Element => {
  const renderButton = () => {
    if (isFavorite) {
      return (
        <Favorite
          variant="contained"
          isFavorite={true}
          onClick={onRemoveFavorite}
          color="error"
        >
          Remove from favorite
        </Favorite>
      )
    }
    return (
      <Favorite
        isFavorite={false}
        onClick={onAddToFavorite}
        variant="contained"
        color="primary"
      >
        Add to favorite
      </Favorite>
    )
  }
  return (
    <Card title={`Show more about ${name}`} onClick={onOpenClick}>
      <CardRow>
        <CardImage imageUrl={imageUrl} />
        <CardTitle>
          {name}
        </CardTitle>
      </CardRow>
      {renderButton()}
      {withRaiting && (
        <Stack spacing={1} onClick={(e) => e.stopPropagation()}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
      )}
    </Card>
  )
}
