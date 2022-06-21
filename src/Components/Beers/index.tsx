import React from 'react'
import { BeersSearchBar } from './BeersSearchBar'
type BeersProps = {
  data: any // TO DO change type
}
export const Beers = ({
  data,
}: BeersProps): JSX.Element => {
  return (
    <div>
      <BeersSearchBar />
    </div>
  )
}
