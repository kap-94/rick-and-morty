import { styled } from '@mui/system'

const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.common.white,
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  outline: 0,
  border: 0,
  margin: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  height: '2.35rem',
  lineHeight: 1.75,
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  minWidth: '64px',
  padding: '6px 16px',
  borderRadius: '4px',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&:hover': {
    backgroundColor: '#449C86'
  }
}))

export default function CustomButton({ children, ...otherProps }) {
  return (
    <StyledButton {...otherProps}>
      {children}
    </StyledButton>
  )
}

