type GetBeersAction = {
  type: string,
  payload: any,
}
type AddToFavoriteAction = {
  type: string,
  payload: any,
}

type BeersValues = {
  id: number,
  name: string,
  food_pairing: string[],
  image_url: string,
  description: string,
}

type RatingObj = {
  id: number,
  ratingNumber: number,
}