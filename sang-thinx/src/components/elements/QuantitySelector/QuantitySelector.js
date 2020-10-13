import React, { useState } from 'react';
import { number } from 'prop-types';
import { Button } from 'components/elements';
import styles from './QuantitySelector.module.scss';

const QuantitySelector = ({ max }) => {
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
      >
        -
      </Button>
      <span className={styles['quantity-text']} role='presentation'>
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
        disabled={disabledIncreaseButton}
        onClick={increaseQuantity}
        role='presentation'
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