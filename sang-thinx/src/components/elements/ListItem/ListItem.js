import React from 'react';
import { func, string } from 'prop-types';
import cx from 'classnames';
import { Button } from 'components/elements';
import styles from './ListItem.module.scss';

export const ListItem = ({
  item,
  onSelect,
  selectedItem,
}) => {
  const isSelected = selectedItem === item;
  const handleClick = () => onSelect(item);
  const buttonClass = cx({
    [styles.item]: true,
    [styles.selected]: isSelected
  });

  return (
    <li role='option' aria-selected={isSelected}>
      <Button
        ariaLabel={`size: ${item}`}
        className={buttonClass}
        onClick={handleClick}
        role='option radio'
      >
        {item}
      </Button>
    </li>
  )
}

ListItem.propTypes = {
  item: string.isRequired,
  onSelect: func.isRequired,
  selectedItem: string,
};

ListItem.defaultProps = {
  selectedItem: null,
};

export default ListItem;