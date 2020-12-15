import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import './styles/index.css';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
//import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

import reportWebVitals from './reportWebVitals';

import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, gql, ApolloProvider, 
  useQuery, createHttpLink } from '@apollo/client';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})
//config Apollo Client for graphql 
const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('refresh_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const GET_PART_COUNT = gql`
      {
        partCount
      }
    `


function PartCount() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_PART_COUNT);
  if (error) return <p>Sign in to view</p>

  return(
    <React.Fragment>
      <div>Total Parts</div>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.partCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        parts found
      </Typography>
      <div>
        <Link to="/parts" className={classes.navLink}>
          View PArts
        </Link>
      </div>
    </React.Fragment>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <PartCount/>
      </div>
    </ApolloProvider>
  );
}

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>				
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route exact path="/" component={App} />
			</Switch>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
