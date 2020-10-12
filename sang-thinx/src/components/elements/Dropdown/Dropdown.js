import React, { useState } from 'react';
import cx from 'classnames';
import {
  DropdownButton,
  List
} from 'components/elements';
import styles from './Dropdown.module.scss';

const Dropdown = ({
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

  return (
    <div className={cx(styles.root, className)}>
      <DropdownButton
        isOpen={isListOpen}
        selectedItem={selectedItem}
        onClick={() => toggleList(isListOpen ? false : true)}
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

export default Dropdown;