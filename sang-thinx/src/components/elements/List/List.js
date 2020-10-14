import React, { useRef, useState, useEffect } from 'react';
import { array, func, string } from 'prop-types';
import { ListItem } from 'components/elements';
import styles from './List.module.scss';
import cx from 'classnames';

export const List = ({
  items,
  onSelectItem,
  selectedItem,
}) => {
  const [shouldListOpenUpward, openUpward] = useState(false);

  const listElement = useRef();
  const listItems = items.map(item => (
    <ListItem
      item={item}
      key={item}
      onSelect={onSelectItem}
      selectedItem={selectedItem}
    />
  ));

  useEffect(() => {
    const elementPositionOnScreen = listElement.current.getBoundingClientRect().top;
    const enoughSpaceForDropdown = window.innerHeight - listElement.current.clientHeight;
    const isEnoughSpaceForDropdown = elementPositionOnScreen < enoughSpaceForDropdown;

    if (!isEnoughSpaceForDropdown) openUpward(true);
    else openUpward(false);
  }, []);

  const listClass = cx(styles.root, {
    [styles.upward]: shouldListOpenUpward
  });
  
  return (
    <ul
      ref={listElement}
      className={listClass}
      role='listbox'
    >
      {listItems}
    </ul>
  );
};

List.propTypes = {
  items: array.isRequired,
  onSelectItem: func.isRequired,
  selectedItem: string,
}

List.defaultProps = {
  selectedItem: null,
};

export default List;