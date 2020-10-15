import React, { useEffect } from 'react';
import { func, string } from 'prop-types';
import debounce from 'debounce';
import { connect } from 'react-redux';
import { getPageData } from 'store/page-data/actions';
import { setLastBreakPoint } from 'store/ui/actions';
import { getLastBreakPoint } from 'store/ui/selectors';
import { getCurrentBreakPoint } from 'core/utils';
import { Zoom } from 'components/elements';

export const Layout = ({
  children,
  getPageData,
  lastBreakPoint,
  setLastBreakPoint,
}) => {
  const handleResize = () => {
    const newBreakpoint = getCurrentBreakPoint();
    if (newBreakpoint !== lastBreakPoint) {
      setLastBreakPoint(newBreakpoint);
    }
  };
  const debouncedHandleResize = debounce(handleResize, 250);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);
    handleResize();
    getPageData();

    return () => window.removeEventListener('resize', debouncedHandleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Zoom />
      {children}
    </div>
  )
}

Layout.propTypes = {
  getPageData: func.isRequired,
  lastBreakPoint: string,
  setLastBreakPoint: func.isRequired
}

Layout.defaultProps = {
  lastBreakPoint: ''
}

const mapStateToProps = state => ({
  lastBreakPoint: getLastBreakPoint(state)
})

const mapDispatchToProps = {
  getPageData,
  setLastBreakPoint
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);