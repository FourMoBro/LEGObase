import React, { useEffect } from 'react';
import axiosInstance from '../../axios';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Container, Grid, Link, TextField, Typography, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    }
  }));
  
const LogoutView = () => {
    const classes = useStyles();
    
    

	useEffect(() => {
		const response = axiosInstance.post('logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		
    });

    return (
        <Page className={classes.root} title="Login" >
            <Box display="flex" flexDirection="column" height="100%" justifyContent="center" >
                <Container maxWidth="sm">
                <Typography color="textSecondary" variant="body1" >
                        Have an account?
                        {' '}
                        <Link component={RouterLink} to="/login" variant="h6" >
                        Sign in
                        </Link>
                    </Typography>
                    <Typography color="textSecondary" variant="body1" >
                        Need an account?
                        {' '}
                        <Link component={RouterLink} to="/register" variant="h6" >
                        Register
                        </Link>
                    </Typography>
                </Container>
            </Box>
        </Page>
    );
  };
  export default LogoutView;