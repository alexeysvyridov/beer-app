import React from 'react'
import { Card, CardImage, CardRow, CardTitle, Favorite } from './styled'
import StarIcon from '@mui/icons-material/Star';

type BeerCardItemProps = {
  imageUrl: string,
  name: string,
  isFavorite: boolean,
}

export const BeerCardItem = ({
  imageUrl,
  name,
  isFavorite,
}: BeerCardItemProps): JSX.Element => {
  return (
    <Card>
      <CardImage imageUrl={imageUrl} />
      <CardRow>
        <CardTitle>
          {name}
        </CardTitle>
        <Favorite isFavorite={isFavorite}>
          <StarIcon />
        </Favorite>
      </CardRow>
    </Card>
  )
}
