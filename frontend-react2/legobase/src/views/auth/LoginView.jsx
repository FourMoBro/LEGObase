import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Container, Grid, Link, TextField, Typography, makeStyles } from '@material-ui/core';

import Page from '../../components/Page';
import axiosInstance from '../../axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleOnSubmit = (values) => {
    axiosInstance
        .post(`token/obtain/`, {
            company_id: values.company_id,
            password: values.password,
        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
                'JWT ' + localStorage.getItem('access_token');
            navigate('/');
            //console.log(res);
            //console.log(res.data);
        });
};

  return (
    <Page className={classes.root} title="Login" >
      <Box display="flex" flexDirection="column" height="100%" justifyContent="center" >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              company_id: '',  
              //email: '', 
              password: '' }}
            validationSchema={Yup.object().shape({
              company_id: Yup.string().max(15).required('CompanyID is required'),  
              //email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={handleOnSubmit}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2" >
                    Sign in
                  </Typography>
                  {/* <Typography color="textSecondary" gutterBottom variant="body2" >
                    Sign in on the internal platform
                  </Typography> */}
                </Box>

                <Box mt={3} mb={1} >
                  <Typography align="center" color="textSecondary" variant="body1" >
                    Log in with Company ID
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.company_id && errors.company_id)}
                  fullWidth
                  helperText={touched.company_id && errors.company_id}
                  label="Company ID"
                  margin="normal"
                  name="company_id"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  
                  value={values.company_id}
                  variant="outlined"
                />
{/*                 <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                /> */}
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1" >
                  Don&apos;t have an account?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
