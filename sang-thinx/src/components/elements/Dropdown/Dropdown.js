import React, { useState } from 'react';
import { array, string } from 'prop-types';
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

Dropdown.propTypes = {
  className: string,
  items: array.isRequired,
  type: string.isRequired
}

Dropdown.defaultProps = {
  className: ''
}

export default Dropdown;