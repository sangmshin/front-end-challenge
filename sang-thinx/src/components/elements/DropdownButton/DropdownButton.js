import React from 'react';
import { func, string } from 'prop-types';
import { Button } from 'components/elements';
import styles from './DropdownButton.module.scss';

export const DropdownButton = ({
  onClick,
  selectedItem,
  type,
}) => {
  const buttonLabel = selectedItem ? selectedItem : type;

  return (
    <Button
      className={styles.root}
      onClick={onClick}
      role='button'
    >
      {buttonLabel}
      <span className={styles.caret}></span>
    </Button>
  )
}

DropdownButton.propTypes = {
  onClick: func.isRequired,
  selectedItem: string,
  type: string.isRequired,
}

DropdownButton.defaultProps = {
  selectedItem: null
}

export default DropdownButton;