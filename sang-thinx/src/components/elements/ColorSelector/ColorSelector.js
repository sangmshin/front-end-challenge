import React, { useEffect, useState } from 'react';
import { array } from 'prop-types';
import cx from 'classnames';
import { Button } from 'components/elements';
import { COLOR_HEXCODE_MAP } from 'core/constants';
import styles from './ColorSelector.module.scss';

const ColorSelector = ({ colors }) => {
  const [selectedColor, selectColor] = useState('');
  const handleClick = ({ target }) => selectColor(target.innerText);

  useEffect(() => {
    selectColor(colors[0]);
  }, [colors]);

  
  const colorOptions = colors.map(color => {
    const isSelected = selectedColor === color;
    const textColor = color === 'black' ? 'white' : 'black';
    const checkMark = (
      <span className={styles['check-mark']}>
        <svg
          style={{fill: textColor}}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          >
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
        </svg>
      </span>
    );

    return (
      <Button
        className={styles['color-button']}
        key={color}
        onClick={handleClick}
        role='radio'
        style={{
          backgroundColor: COLOR_HEXCODE_MAP[color],
          color: textColor
        }}
      >
        {color}
        {isSelected && checkMark}
      </Button>
    )
  });

  return (
    <div className={styles.root}>
      <span className={styles['color-option-title']}>color</span>
      {colorOptions}
    </div>
  )
}

ColorSelector.propTypes = {
  colors: array.isRequired
}

export default ColorSelector;

