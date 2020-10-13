import { useEffect } from 'react';
import { func, string } from 'prop-types';
import debounce from 'debounce';
import { connect } from 'react-redux';
import { getPageData } from 'store/page-data/actions';
import { setLastBreakPoint } from 'store/ui/actions';
import { getCurrentBreakPoint } from 'core/utils';
import { getLastBreakPoint } from 'store/ui/selectors';

const Layout = ({
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
    console.log('mounted');

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [])

  return children
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