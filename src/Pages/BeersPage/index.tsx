import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Beers } from '../../Components/Beers'
import { ACTION_TYPES } from '../../store/actionTypes';
import { useBeersState } from '../../store/selectors'

export const BeersPage = (): JSX.Element => {
  const { beers } = useBeersState();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (page: number) => {
    console.log(page)
    setCurrentPage(page)
  }

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.GET_BEERS_FETCH,
      payload: currentPage,
    })
  }, [currentPage])

  return (
    <Beers
      beers={beers}
      currentPage={currentPage}
      onChagePage={handleChangePage}
    />
  )
}
