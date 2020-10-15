import React, { useEffect, useState } from 'react';
import { array, string } from 'prop-types';
import cx from 'classnames';
import {
  DropdownButton,
  List
} from 'components/elements';
import styles from './Dropdown.module.scss';

export const Dropdown = ({
  className,
  items,
  type
}) => {
  const [selectedItem, selectItem] = useState(null);
  const [isListOpen, toggleList] = useState(false);

  const handleDropdown = item => {
    selectItem(item);
    toggleList(false);
  };
  
  const handleClick = e => {
    const clickedOutside = isListOpen && (e.target.getAttribute('role') !== 'option radio');
    if (clickedOutside) toggleList(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  });

  return (
    <div className={cx(styles.root, className)}>
      <DropdownButton
        selectedItem={selectedItem}
        onClick={() => toggleList(true)}
        type={type}
      />
      {isListOpen &&
        <List
          items={items}
          onSelectItem={handleDropdown}
          selectedItem={selectedItem}
        />
      }
    </div>
  )
}

Dropdown.propTypes = {
  className: string,
  items: array.isRequired,
  type: string.isRequired
}

Dropdown.defaultProps = {
  className: null
}

export default Dropdown;