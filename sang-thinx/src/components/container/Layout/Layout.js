import { useEffect } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { getPageData } from 'store/page-data/actions';

const Layout = ({ children, getPageData, ...otherProps }) => {
  
  useEffect(() => {
    getPageData();
  }, [otherProps])

  return children
}

Layout.propTypes = {
  getPageData: func.isRequired
}

const mapDispatchToProps = {
  getPageData
};

export default connect(null, mapDispatchToProps)(Layout);