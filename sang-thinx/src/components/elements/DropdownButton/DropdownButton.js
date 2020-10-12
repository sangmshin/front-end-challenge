import React from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';
import { Button } from 'components/elements';
import styles from './DropdownButton.module.scss';

const DropdownButton = ({
  isOpen,
  onClick,
  selectedItem,
  type,
}) => {
  
  const buttonLabel = selectedItem ? selectedItem : type;
  const caretClass = cx(styles.caret, {
    [styles.open]: isOpen
  });

  return (
    <Button
      className={styles.root}
      onClick={onClick}
      role='button'
    >
      {buttonLabel}
      <span className={caretClass}></span>
    </Button>
  )
}

DropdownButton.propTypes = {
  isOpen: bool.isRequired,
  onClick: func.isRequired,
  selectedItem: string,
  type: string.isRequired,
}

DropdownButton.defaultProps = {
  selectedItem: null
}

export default DropdownButton;