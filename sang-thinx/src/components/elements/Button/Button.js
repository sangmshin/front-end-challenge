import React, { forwardRef } from 'react';
import { bool, func, node, object, oneOfType, string } from 'prop-types';

export const Button = forwardRef(({
  accessibleText,
  ariaLabel,
  children,
  className,
  disabled,
  onClick,
  role,
  style,
  type
}, ref) => {
  const clickHandler = e => onClick && onClick(e);

  return (
    <button
      ref={ref}
      aria-label={ariaLabel}
      className={className}
      onClick={clickHandler}
      disabled={disabled}
      role={role}
      style={style}
      type={type}
    >
      {children}
      {accessibleText && <span className='accessible'>{accessibleText}</span>}
    </button>
  )
})

Button.propTypes = {
  accessibleText: string,
  ariaLabel: string,
  children: oneOfType([
    string,
    node
  ]).isRequired,
  className: string,
  disabled: bool,
  onClick: func,
  role: string,
  style: object,
  type: string
};

Button.defaultProps = {
  accessibleText: '',
  ariaLabel: '',
  children: '',
  className: null,
  disabled: false,
  onClick: _ => _,
  role: 'button',
  style: null,
  type: 'button'
};

export default Button;