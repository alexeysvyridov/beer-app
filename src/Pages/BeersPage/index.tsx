import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Beers } from '../../Components/Beers'
import { ACTION_TYPES } from '../../store/actionTypes';
import { useBeersState } from '../../store/selectors'

export const BeersPage = (): JSX.Element => {
  const { beers } = useBeersState();
  const dispatch = useDispatch();
  console.log(beers)
  useEffect(() => {
    dispatch({ type: ACTION_TYPES.GET_BEERS_FETCH })
  }, [])
  return (
    <Beers beers={beers} />
  )
}
