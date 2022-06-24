import React from 'react'
import Rating from '@mui/material/Rating'
import { Card, CardImage, CardRow, CardTitle, Favorite } from './styled'
import StarIcon from '@mui/icons-material/Star';
import { Stack } from '@mui/material';
import { useFavoritesState } from '../../../../store/selectors';
import { useDispatch } from 'react-redux';
import { addRating } from '../../../../store/actionCreators';

type BeerCardItemProps = {
  imageUrl: string,
  name: string,
  isFavorite: boolean,
  onOpenClick: () => void,
  onAddToFavorite: (e: React.FormEvent) => void,
  onRemoveFavorite: (e: React.FormEvent) => void,
  withRaiting: boolean | undefined,
  id: number,
}

const findValueById = (id: number, arr: RatingObj[]) => {
  let item = arr.find((item) => item.id === id)

  return item?.ratingNumber || 0.1;
}

export const BeerCardItem = ({
  imageUrl,
  name,
  isFavorite,
  onOpenClick,
  onAddToFavorite,
  onRemoveFavorite,
  withRaiting,
  id,
}: BeerCardItemProps): JSX.Element => {

  const { rating } = useFavoritesState();
  const dispatch = useDispatch();

  const handleChangeRating = (value: number) => {
    dispatch(addRating({ id, ratingNumber: value }))
  }

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
          <Rating
            name="half-rating"
            defaultValue={0.5} precision={0.5}
            value={findValueById(id, rating)}
            onChange={(e: unknown, newValue: number | null) => {
              if (newValue !== null) {

                handleChangeRating(newValue)
              }
            }}
          />
        </Stack>
      )}
    </Card>
  )
}
