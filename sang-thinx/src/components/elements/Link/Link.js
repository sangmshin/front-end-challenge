import React from 'react';
import { func, node, string } from 'prop-types';

export const Link = ({
  accessibleText,
  children,
  className,
  onClick,
  target,
  to,
}) => {
  if (!children) return null;

  return (
    <a
      href={to}
      className={className}
      onClick={onClick}
      target={target}
    >
      {children}
      {accessibleText && <span className='accessible'>{accessibleText}</span>}
    </a>
  )
}

Link.propTypes = {
  accessibleText: string,
  children: node.isRequired,
  className: string,
  onClick: func,
  target: string,
  to: string,
}

Link.defaultProps = {
  accessibleText: '',
  className: null,
  onClick: _ => _,
  target: null,
  to: null,
}

export default Link;