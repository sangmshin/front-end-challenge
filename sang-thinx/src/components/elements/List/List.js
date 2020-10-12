import React from 'react';
import { array, func, string } from 'prop-types';
import { ListItem } from 'components/elements';
import styles from './List.module.scss';

const List = ({
  items,
  onSelectItem,
  selectedItem,
}) => {
  const listItems = items.map(item => (
    <ListItem
      item={item}
      key={item}
      onSelect={onSelectItem}
      selectedItem={selectedItem}
    />
  ));

  return (
    <ul className={styles.root} role='listbox'>{listItems}</ul>
  );
}

List.propTypes = {
  items: array.isRequired,
  onSelectItem: func.isRequired,
  selectedItem: string,
}

List.defaultProps = {
  selectedItem: null,
};

export default List;