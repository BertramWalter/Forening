import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

  
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '90vh' }} />
      </Container>
    </React.Fragment>
  );
}