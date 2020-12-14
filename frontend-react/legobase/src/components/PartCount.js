import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import Title from './Title'



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	partTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	partText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const GET_COUNT_QUERY = gql`
	{
		partCount
	}
`
export default function Deposits() {
	const classes = useStyles()
  
	const { loading, error, data } = useQuery(GET_COUNT_QUERY)
	if (error) return <p>Sign in to view</p>
	return (
	  <React.Fragment>
		<Title>Total Parts</Title>
		<Typography component="p" variant="h4">
		  {loading ? 'Loading part counts...' : data.partCount}
		</Typography>
		<Typography color="textSecondary" className={classes.depositContext}>
		  parts found
		</Typography>
		<div>
		  <Link to="/parts" className={classes.navLink}>
			View Parts
		  </Link>
		</div>
	  </React.Fragment>
	)
  }