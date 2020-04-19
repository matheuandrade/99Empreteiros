import React from 'react';
import Container from '@material-ui/core/Container';

const Layout = ({children}) => ({
  render () {
    return (
      <>
        <Container maxWidth="md">
          {children}
        </Container>
      </>
    )}
});

export default Layout;
