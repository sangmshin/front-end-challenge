import React, { useEffect, useState } from 'react';
import { array, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { blockScroll, closeZoom } from 'store/ui/actions';
import { isZoomOpen, getZoomImages } from 'store/ui/selectors';
import { Button } from 'components/elements';
import styles from './Zoom.module.scss';
import closeButton from 'images/close-btn.svg';

export const Zoom = ({ blockScroll, closeZoom, images, isZoomOpen }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isZoomOpen && !isOpen) open();
    if (!isZoomOpen && isOpen) close();
  })

  useEffect(() => () => {
    blockScroll(false);
    isOpen && close();
  }, []);

  const keyListener = e => {
    const isEscapeButton = e.keyCode === 27;
    if (isEscapeButton) closeZoom();
  }

  const toggleKeyListener = toggle => {
    if (toggle) window.addEventListener('keyup', keyListener);
    else window.removeEventListener('keyup', keyListener);
  };
  
  const open = () => {
    toggleKeyListener(true);
    blockScroll(true);
    setOpen(true);
  };

  const close = () => {
    toggleKeyListener(false);
    blockScroll(false);
    setOpen(false);
  };

  const zoomedImages = images.map(({ src, alt }, index) => (
    <div key={index}>
      <img
        className={styles['zoom-image']}
        src={src}
        alt={alt}
        onClick={() => closeZoom()}
      />
    </div>
  ));

  if (isZoomOpen) {
    return (
      <div className={styles.root}>
        <div className={styles['close-button']}>
          <Button
            accessibleText="Close"
            ariaLabel='Close'
            onClick={() => closeZoom()}
            role='presentation'
            type='button'
          >
            <img src={closeButton} alt='close-button' />
          </Button>
        </div>
        {zoomedImages}
      </div>
    );
  }

  return null;
}

Zoom.propTypes = {
  blockScroll: func.isRequired,
  closeZoom: func.isRequired,
  images: array,
  isZoomOpen: bool,
}

Zoom.defaultProps = {
  images: [],
  isZoomOpen: false,
};

const mapStateToProps = state => ({
  images: getZoomImages(state),
  isZoomOpen: isZoomOpen(state)
});


const mapDispatchToProps = {
  closeZoom,
  blockScroll
};

export default connect(mapStateToProps, mapDispatchToProps)(Zoom);