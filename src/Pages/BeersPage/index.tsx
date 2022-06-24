import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Beers } from '../../Components/Beers'
import { Loader } from '../../Components/Loader';
import { ACTION_TYPES } from '../../store/actionTypes';
import { useBeersState } from '../../store/selectors'

export const BeersPage = (): JSX.Element => {
  const { beers, isLoading, error, query } = useBeersState();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.GET_BEERS_FETCH,
      payload: {
        currentPage,
        food: query,
      },
    })
  }, [currentPage])

  const renderBeers = () => {
    if (isLoading) {
      return (
        <Loader />
      )
    }

    return (
      <Beers
        beers={beers}
        currentPage={currentPage}
        onChagePage={handleChangePage}
        error={error}
      />
    )
  }

  return renderBeers()
}
