import React, { useRef, useState, useEffect } from 'react';
import { array, func, string } from 'prop-types';
import cx from 'classnames';
import { ListItem } from 'components/elements';
import styles from './List.module.scss';

export const List = ({
  items,
  onSelectItem,
  selectedItem,
}) => {
  const [shouldOpenUpward, openUpward] = useState(false);

  const listRef = useRef();
  const listItems = items.map(item => (
    <ListItem
      item={item}
      key={item}
      onSelect={onSelectItem}
      selectedItem={selectedItem}
    />
  ));

  useEffect(() => {
    const elementPositionOnScreen = listRef.current.getBoundingClientRect().top;
    const enoughSpaceForDropdown = window.innerHeight - listRef.current.clientHeight;
    const isEnoughSpaceForDropdown = elementPositionOnScreen < enoughSpaceForDropdown;

    if (!isEnoughSpaceForDropdown) openUpward(true);
    else openUpward(false);
  }, []);

  const listClass = cx(styles.root, {
    [styles['open-upward']]: shouldOpenUpward,
    [styles['open-downward']]: !shouldOpenUpward
  });
  
  return (
    <ul
      className={listClass}
      ref={listRef}
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