import React from 'react'
import { css } from '@emotion/react'
import {colors} from '../../constants/colors'


type Size = 'small' | 'medium' | 'large';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  variant?: "filled" | "outlined"
}

const defaultStyles = css({
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.8,
  },
  ':disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
  ":focus-visible": {
    outline: '2px solid green',
    outlineOffset: '1px',
  }
})

const sizeStyles = {
  small: css({
    fontSize: '12px',
    padding: '6px 12px'
  }),
  medium: css({
    fontSize: '16px',
    padding: '8px 16px',
  }),
  large: css({
    fontSize: '20px',
    padding: '10px 20px',
  }),
}

const variantStyles = {
  filled: css({
    backgroundColor: colors.green700,
    color: 'white',
  }),
  outlined: css({
    backgroundColor: 'transparent',
    color: colors.green700,
    border: `2px solid ${colors.green700}`
  }),
}


const Button = ({children, size ="small", variant ="filled", ...props}: Props) => {

  return (
    <button css={[defaultStyles, sizeStyles[size], variantStyles[variant]]} aria-disabled={props.disabled} {...props}>
      <span>{children}</span>
    </button>
  );
}


export default Button;
