import React, { useState } from 'react'
import { ButtonSubmit, Container, IconWrapper, Input } from './styled'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../../store/actionTypes';

export const BeersSearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChangevalue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    dispatch({
      type: ACTION_TYPES.FETCH_SEARCH_BEER,
      payload: {
        food: value,
      },
    })
  }

  return (
    <Container>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <Input
        placeholder="Search Beer"
        value={value}
        onChange={handleChangevalue}
      />
      <ButtonSubmit
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </ButtonSubmit>
    </Container>
  )
}
