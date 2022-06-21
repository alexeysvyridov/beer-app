import React, { useState } from 'react'
import { ButtonSubmit, Container, IconWrapper, Input } from './styled'
import SearchIcon from '@mui/icons-material/Search';

export const BeersSearchBar = (): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChangevalue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      <ButtonSubmit type="submit">
        Submit
      </ButtonSubmit>
    </Container>
  )
}
