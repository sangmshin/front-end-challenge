import React from 'react';
import { bool, func, node, object, oneOfType, string } from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  accessibleText,
  children,
  className,
  disabled,
  onClick,
  role,
  style
}) => {
  const clickHandler = e => onClick && onClick(e);

  return (
    <button
      className={cx('btn', className)}
      onClick={clickHandler}
      disabled={disabled}
      role={role}
      style={style}
    >
      {children}
      {accessibleText && <span className={styles.accessible}>{accessibleText}</span>}
    </button>
  )
}

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
};

Button.defaultProps = {
  accessibleText: '',
  ariaLabel: '',
  children: '',
  className: '',
  disabled: false,
  onClick: _ => _,
  role: 'button',
  style: null
};

export default Button;