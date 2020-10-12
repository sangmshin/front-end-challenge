import React, { useState } from 'react';
import { Button } from 'components/elements';
import styles from './QuantitySelector.module.scss';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);
  const disabledDecreaseButton = quantity === 1;
  const disabledIncreaseButton = quantity === 9;

  return (
    <div className={styles.root}>
      <Button
        ariaLabel='decrease selected quantity'
        className={styles['decrease-button']}
        onClick={decreaseQuantity}
        disabled={disabledDecreaseButton}
      >
        -
      </Button>
      <span className={styles['quantity-text']}>
        quantity ( 
        <input
          className={styles.number}
          name='quantity'
          readOnly='readonly'
          value={quantity}
          type='number'
        />
        )
      </span>
      <Button
        ariaLabel='increase selected quantity'
        className={styles['increase-button']}
        onClick={increaseQuantity}
        disabled={disabledIncreaseButton}
      >
        +
      </Button>
    </div>
  )
}

export default QuantitySelector;