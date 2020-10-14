import React, { useState } from 'react';
import { number } from 'prop-types';
import { Button } from 'components/elements';
import styles from './QuantitySelector.module.scss';

export const QuantitySelector = ({ max }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);
  const disabledDecreaseButton = quantity === 1;
  const disabledIncreaseButton = quantity === max;

  return (
    <div className={styles.root}>
      <Button
        ariaLabel='decrease selected quantity'
        className={styles['decrease-button']}
        disabled={disabledDecreaseButton}
        onClick={decreaseQuantity}
        role='presentation'
        type='button'
      >
        -
      </Button>
      <span className={styles['quantity-text-wrapper']} role='presentation'>
        <span className={styles['quantity-text']}>
          quantity
        </span>
        <input
          aria-label='quantity'
          className={styles['quantity-number']}
          maxLength={max}
          name='quantity'
          readOnly
          step='1'
          value={`(${quantity})`}
        />
      </span>
      <Button
        ariaLabel='increase selected quantity'
        className={styles['increase-button']}
        disabled={disabledIncreaseButton}
        onClick={increaseQuantity}
        role='presentation'
        type='button'
      >
        +
      </Button>
    </div>
  )
}

QuantitySelector.propTypes = {
  max: number
}

QuantitySelector.defaultProps = {
  max: null
}

export default QuantitySelector;