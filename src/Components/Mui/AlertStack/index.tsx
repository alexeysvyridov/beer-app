import { Alert } from "@mui/material"
import { AlertContainer } from "./styled"

type AlertStackType = {
  error?: string,
}
export const AlertStack = ({
  error,
}: AlertStackType) => {
  return (
    <AlertContainer>
      <Alert severity="error">
        {error || 'Something went wrong'}
      </Alert>
    </AlertContainer>
  )
}